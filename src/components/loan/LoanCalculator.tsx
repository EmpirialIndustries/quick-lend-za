import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp } from 'lucide-react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState([5000]);
  const [loanTerm, setLoanTerm] = useState([30]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Interest rate (annual percentage rate)
  const interestRate = 0.24; // 24% APR (typical for short-term lending)

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, loanTerm]);

  const calculateLoan = () => {
    const principal = loanAmount[0];
    const termInDays = loanTerm[0];
    
    // Simple interest calculation for short-term loans
    const dailyRate = interestRate / 365;
    const interest = principal * dailyRate * termInDays;
    const total = principal + interest;
    const daily = total / termInDays;

    setTotalInterest(Math.round(interest));
    setTotalPayment(Math.round(total));
    setMonthlyPayment(Math.round(daily));
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-card">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          Loan Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Loan Amount */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Loan Amount: R{loanAmount[0].toLocaleString()}
          </Label>
          <Slider
            value={loanAmount}
            onValueChange={setLoanAmount}
            max={50000}
            min={500}
            step={500}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>R500</span>
            <span>R50,000</span>
          </div>
        </div>

        {/* Loan Term */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Loan Term: {loanTerm[0]} days
          </Label>
          <Slider
            value={loanTerm}
            onValueChange={setLoanTerm}
            max={365}
            min={7}
            step={7}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>7 days</span>
            <span>365 days</span>
          </div>
        </div>

        {/* Calculation Results */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Daily Payment:</span>
            <span className="text-lg font-bold text-primary">
              R{monthlyPayment.toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Total Interest:</span>
            <span className="text-sm font-semibold text-warning">
              R{totalInterest.toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <span className="text-sm font-medium">Total Repayment:</span>
            <span className="text-xl font-bold text-foreground">
              R{totalPayment.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Interest Rate Info */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <TrendingUp className="w-4 h-4" />
          <span>Interest rate: 24% APR</span>
        </div>

        <Button className="w-full bg-gradient-primary hover:shadow-primary transition-smooth">
          Apply for This Loan
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;