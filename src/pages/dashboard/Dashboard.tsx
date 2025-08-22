import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  Eye,
  Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  });

  // Mock data - in a real app, this would come from API
  const [loans] = useState([
    {
      id: 'L001',
      amount: 15000,
      status: 'active',
      nextPayment: '2024-01-15',
      nextPaymentAmount: 450,
      totalPaid: 3600,
      totalAmount: 18000,
      daysRemaining: 32
    },
    {
      id: 'L002',
      amount: 5000,
      status: 'completed',
      nextPayment: null,
      nextPaymentAmount: 0,
      totalPaid: 6000,
      totalAmount: 6000,
      daysRemaining: 0
    }
  ]);

  const activeLoan = loans.find(loan => loan.status === 'active');
  const completedLoans = loans.filter(loan => loan.status === 'completed');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-info text-info-foreground">Active</Badge>;
      case 'completed':
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">
                Welcome back, {user.firstName}!
              </h1>
              <p className="text-muted-foreground">
                Manage your loans and track your progress
              </p>
            </div>
            <Button 
              className="bg-gradient-primary hover:shadow-primary transition-smooth"
              onClick={() => navigate('/apply')}
            >
              <Plus className="w-4 h-4 mr-2" />
              Apply for Loan
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loans.filter(l => l.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Borrowed</CardTitle>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R{loans.reduce((sum, loan) => sum + loan.amount, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {activeLoan ? `R${activeLoan.nextPaymentAmount}` : 'None'}
              </div>
              {activeLoan && (
                <p className="text-xs text-muted-foreground">
                  Due {new Date(activeLoan.nextPayment!).toLocaleDateString()}
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Credit Score</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">Good</div>
              <p className="text-xs text-muted-foreground">
                Based on payment history
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Active Loan Section */}
        {activeLoan && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Active Loan</h2>
            <Card className="loan-card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Loan #{activeLoan.id}
                      {getStatusBadge(activeLoan.status)}
                    </CardTitle>
                    <CardDescription>
                      Loan Amount: R{activeLoan.amount.toLocaleString()}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Repayment Progress</span>
                    <span>{Math.round((activeLoan.totalPaid / activeLoan.totalAmount) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(activeLoan.totalPaid / activeLoan.totalAmount) * 100} 
                    className="h-2"
                  />
                </div>

                {/* Payment Info */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Next Payment</span>
                    </div>
                    <div className="text-lg font-bold">R{activeLoan.nextPaymentAmount}</div>
                    <div className="text-xs text-muted-foreground">
                      Due {new Date(activeLoan.nextPayment!).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Paid</span>
                    </div>
                    <div className="text-lg font-bold">R{activeLoan.totalPaid.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">
                      of R{activeLoan.totalAmount.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-info" />
                      <span className="text-sm font-medium">Remaining</span>
                    </div>
                    <div className="text-lg font-bold">{activeLoan.daysRemaining} days</div>
                    <div className="text-xs text-muted-foreground">
                      Until completion
                    </div>
                  </div>
                </div>

                {/* Payment Button */}
                <div className="flex gap-3">
                  <Button className="bg-gradient-primary hover:shadow-primary transition-smooth flex-1">
                    Make Payment
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Statement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Loan History */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Loan History</h2>
          <div className="space-y-4">
            {loans.map((loan) => (
              <Card key={loan.id} className="hover:shadow-card transition-smooth">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Loan #{loan.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        Amount: R{loan.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusBadge(loan.status)}
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common actions you might want to perform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="h-20 flex-col gap-2"
                onClick={() => navigate('/apply')}
              >
                <Plus className="w-6 h-6" />
                Apply for New Loan
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Download className="w-6 h-6" />
                Download Statement
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <AlertCircle className="w-6 h-6" />
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;