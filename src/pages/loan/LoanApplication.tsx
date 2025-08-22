import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Calculator, FileCheck, CreditCard, CheckCircle } from 'lucide-react';

type ApplicationStep = 'amount' | 'personal' | 'employment' | 'review' | 'complete';

const LoanApplication = () => {
  const [currentStep, setCurrentStep] = useState<ApplicationStep>('amount');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [applicationData, setApplicationData] = useState({
    loanAmount: 5000,
    loanTerm: 30,
    purpose: '',
    // Personal Info
    firstName: '',
    lastName: '',
    idNumber: '',
    phone: '',
    email: '',
    // Employment Info
    employmentStatus: '',
    employer: '',
    monthlyIncome: '',
    // Bank Info
    bankName: '',
    accountType: '',
    accountNumber: ''
  });

  const steps = [
    { id: 'amount', title: 'Loan Details', icon: Calculator },
    { id: 'personal', title: 'Personal Info', icon: FileCheck },
    { id: 'employment', title: 'Employment', icon: CreditCard },
    { id: 'review', title: 'Review', icon: CheckCircle }
  ];

  const getStepProgress = () => {
    const stepIndex = steps.findIndex(step => step.id === currentStep);
    return ((stepIndex + 1) / steps.length) * 100;
  };

  const handleInputChange = (field: string, value: string | number) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as ApplicationStep);
    }
  };

  const prevStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as ApplicationStep);
    }
  };

  const submitApplication = async () => {
    setIsLoading(true);
    
    // TODO: Submit to backend API
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep('complete');
    } catch (error) {
      console.error('Application submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateRepayment = () => {
    const principal = applicationData.loanAmount;
    const termInDays = applicationData.loanTerm;
    const interestRate = 0.24; // 24% APR
    const dailyRate = interestRate / 365;
    const interest = principal * dailyRate * termInDays;
    const total = principal + interest;
    
    return {
      dailyPayment: Math.round(total / termInDays),
      totalPayment: Math.round(total),
      totalInterest: Math.round(interest)
    };
  };

  const repayment = calculateRepayment();

  if (currentStep === 'complete') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-success-foreground" />
            </div>
            <CardTitle className="text-2xl">Application Submitted!</CardTitle>
            <CardDescription>
              We're reviewing your application and will get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>
                Application ID: EZ{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </AlertDescription>
            </Alert>
            <Button 
              className="w-full bg-gradient-primary hover:shadow-primary transition-smooth"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Loan Application</h1>
              <p className="text-muted-foreground">
                Step {steps.findIndex(s => s.id === currentStep) + 1} of {steps.length}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={getStepProgress()} className="h-2 mb-4" />
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = step.id === currentStep;
              const isCompleted = steps.findIndex(s => s.id === currentStep) > index;
              
              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 text-sm ${
                    isActive ? 'text-primary font-medium' : 
                    isCompleted ? 'text-success' : 'text-muted-foreground'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isActive ? 'bg-primary text-primary-foreground' :
                    isCompleted ? 'bg-success text-success-foreground' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    <StepIcon className="w-4 h-4" />
                  </div>
                  <span className="hidden sm:block">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Step 1: Loan Amount */}
          {currentStep === 'amount' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Loan Details
                </CardTitle>
                <CardDescription>
                  Tell us how much you need and for how long
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Loan Amount: R{applicationData.loanAmount.toLocaleString()}</Label>
                  <Input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={applicationData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>R500</span>
                    <span>R50,000</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Loan Term: {applicationData.loanTerm} days</Label>
                  <Input
                    type="range"
                    min="7"
                    max="365"
                    step="7"
                    value={applicationData.loanTerm}
                    onChange={(e) => handleInputChange('loanTerm', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>7 days</span>
                    <span>365 days</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Loan Purpose</Label>
                  <Select onValueChange={(value) => handleInputChange('purpose', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency Expense</SelectItem>
                      <SelectItem value="bills">Pay Bills</SelectItem>
                      <SelectItem value="medical">Medical Expense</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="home">Home Improvement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Repayment Preview */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-3">Repayment Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Daily Payment:</span>
                      <span className="font-bold">R{repayment.dailyPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Interest:</span>
                      <span className="text-warning">R{repayment.totalInterest}</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-2">
                      <span>Total Repayment:</span>
                      <span>R{repayment.totalPayment}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={nextStep} 
                  className="w-full bg-gradient-primary hover:shadow-primary transition-smooth"
                  disabled={!applicationData.purpose}
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 'personal' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  We need to verify your identity for security purposes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={applicationData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={applicationData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idNumber">South African ID Number</Label>
                  <Input
                    id="idNumber"
                    placeholder="0000000000000"
                    value={applicationData.idNumber}
                    onChange={(e) => handleInputChange('idNumber', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+27 12 345 6789"
                    value={applicationData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="flex-1 bg-gradient-primary hover:shadow-primary transition-smooth"
                    disabled={!applicationData.firstName || !applicationData.lastName || !applicationData.idNumber}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Employment Information */}
          {currentStep === 'employment' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Employment & Banking
                </CardTitle>
                <CardDescription>
                  Help us assess your ability to repay the loan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="employmentStatus">Employment Status</Label>
                  <Select onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employed">Employed</SelectItem>
                      <SelectItem value="self-employed">Self Employed</SelectItem>
                      <SelectItem value="contract">Contract Worker</SelectItem>
                      <SelectItem value="pensioner">Pensioner</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employer">Employer Name</Label>
                  <Input
                    id="employer"
                    value={applicationData.employer}
                    onChange={(e) => handleInputChange('employer', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyIncome">Monthly Income (R)</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    placeholder="15000"
                    value={applicationData.monthlyIncome}
                    onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Select onValueChange={(value) => handleInputChange('bankName', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="absa">ABSA</SelectItem>
                      <SelectItem value="fnb">FNB</SelectItem>
                      <SelectItem value="standard">Standard Bank</SelectItem>
                      <SelectItem value="nedbank">Nedbank</SelectItem>
                      <SelectItem value="capitec">Capitec</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="flex-1 bg-gradient-primary hover:shadow-primary transition-smooth"
                    disabled={!applicationData.employmentStatus || !applicationData.monthlyIncome}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Review */}
          {currentStep === 'review' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Review Application
                </CardTitle>
                <CardDescription>
                  Please review your information before submitting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Loan Details */}
                <div>
                  <h4 className="font-medium mb-3">Loan Details</h4>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span>R{applicationData.loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Term:</span>
                      <span>{applicationData.loanTerm} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Purpose:</span>
                      <span className="capitalize">{applicationData.purpose}</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-2">
                      <span>Total Repayment:</span>
                      <span>R{repayment.totalPayment}</span>
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div>
                  <h4 className="font-medium mb-3">Personal Information</h4>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span>{applicationData.firstName} {applicationData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ID Number:</span>
                      <span>{applicationData.idNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone:</span>
                      <span>{applicationData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span>{applicationData.email}</span>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertDescription>
                    By submitting this application, you agree to our Terms of Service and 
                    consent to credit checks and verification of the information provided.
                  </AlertDescription>
                </Alert>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button 
                    onClick={submitApplication}
                    className="flex-1 bg-gradient-primary hover:shadow-primary transition-smooth"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;