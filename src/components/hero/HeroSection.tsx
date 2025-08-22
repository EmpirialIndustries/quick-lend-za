import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Calculator, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import heroImage from '@/assets/hero-fintech.jpg';

const HeroSection = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState('10000');
  const [loanTerm, setLoanTerm] = useState('6');
  
  const calculateRepayment = () => {
    const amount = parseFloat(loanAmount);
    const term = parseInt(loanTerm);
    const monthlyRate = 0.024; // 24% annual rate / 12 months
    const monthlyPayment = (amount * monthlyRate) + (amount / term);
    return monthlyPayment.toFixed(2);
  };

  const features = [
    {
      icon: Clock,
      title: 'Instant Decision',
      description: 'Pre-qualification in 60 seconds'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your data is fully protected'
    },
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="EzLend ZA - Premium Financial Solutions"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in text-white">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium leading-tight">
                <span className="block">See How Much</span>
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  You Qualify For
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg font-light">
                Exclusive lending solutions crafted for discerning South Africans. 
                Instant pre-qualification with premium terms.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                <span>Confidential Process</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                <span>No Impact on Credit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                <span>Premium Rates</span>
              </div>
            </div>
          </div>

          {/* Loan Qualification Calculator */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-card animate-slide-up">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-2">
                  Instant Qualification Check
                </h2>
                <p className="text-muted-foreground">
                  Enter your details for immediate pre-approval
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Desired Loan Amount
                  </label>
                  <Select value={loanAmount} onValueChange={setLoanAmount}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000">R 5,000</SelectItem>
                      <SelectItem value="10000">R 10,000</SelectItem>
                      <SelectItem value="15000">R 15,000</SelectItem>
                      <SelectItem value="25000">R 25,000</SelectItem>
                      <SelectItem value="50000">R 50,000</SelectItem>
                      <SelectItem value="100000">R 100,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Repayment Period
                  </label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 months</SelectItem>
                      <SelectItem value="6">6 months</SelectItem>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="18">18 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-accent/50 rounded-lg p-4">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-muted-foreground">Estimated Monthly Payment</span>
                  </div>
                  <div className="text-3xl font-serif font-medium text-primary">
                    R {calculateRepayment()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    *Indicative rate - final terms subject to approval
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-primary transition-smooth text-lg py-6"
                  onClick={() => navigate('/apply')}
                >
                  Check My Qualification
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  {features.map((feature, index) => (
                    <div key={feature.title} className="text-center">
                      <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-2">
                        <feature.icon className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {feature.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;