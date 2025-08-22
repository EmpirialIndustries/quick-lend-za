import Header from '@/components/navigation/Header';
import HeroSection from '@/components/hero/HeroSection';
import LoanCalculator from '@/components/loan/LoanCalculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Smartphone, DollarSign, FileText } from 'lucide-react';

const LandingPage = () => {
  const howItWorksSteps = [
    {
      icon: Smartphone,
      title: 'Apply Online',
      description: 'Complete our simple application in under 5 minutes'
    },
    {
      icon: FileText,
      title: 'Upload Documents',
      description: 'Provide your ID and proof of income securely'
    },
    {
      icon: CheckCircle,
      title: 'Get Approved',
      description: 'Receive instant decision on your loan application'
    },
    {
      icon: DollarSign,
      title: 'Receive Funds',
      description: 'Money transferred to your bank account within hours'
    }
  ];

  const benefits = [
    'No collateral required',
    'Flexible repayment terms',
    'Competitive interest rates',
    '24/7 online application',
    'Quick approval process',
    'Transparent fee structure'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How <span className="text-primary">EzLend ZA</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting the money you need has never been easier. Follow these simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card key={step.title} className="text-center hover:shadow-card transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Calculate Your <span className="text-primary">Loan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly how much you'll pay with our transparent loan calculator.
            </p>
          </div>

          <div className="flex justify-center">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">EzLend ZA</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to providing South Africans with fair, transparent, 
                and accessible lending solutions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-primary transition-smooth"
              >
                Get Started Today
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">5 mins</h3>
                <p className="text-muted-foreground">Application time</p>
              </Card>
              <Card className="text-center p-6">
                <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Secure & Safe</p>
              </Card>
              <Card className="text-center p-6">
                <DollarSign className="w-12 h-12 text-warning mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">24%</h3>
                <p className="text-muted-foreground">Competitive APR</p>
              </Card>
              <Card className="text-center p-6">
                <CheckCircle className="w-12 h-12 text-info mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">10k+</h3>
                <p className="text-muted-foreground">Happy customers</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Your Loan?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of South Africans who trust EzLend ZA for their lending needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">EzLend ZA</h3>
              <p className="text-background/80 mb-4">
                South Africa's trusted short-term lending platform. 
                Making loans accessible, transparent, and fair for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-smooth">About Us</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Contact</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Terms of Service</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Responsible Lending</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 EzLend ZA. All rights reserved. Licensed financial services provider.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;