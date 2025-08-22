import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-fintech.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: 'Instant Approval',
      description: 'Get approved in minutes, not days'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Bank-level security for your data'
    },
    {
      icon: Users,
      title: 'Trusted by Thousands',
      description: 'Join 10,000+ happy customers'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="EzLend ZA - Quick loans for South Africans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Quick Loans for</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  South Africans
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get the money you need today. Fast approval, fair rates, and 
                flexible repayment terms designed for South African consumers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-primary transition-smooth text-lg px-8 py-6"
                onClick={() => navigate('/apply')}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:bg-muted/50"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Calculate Loan
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
                <span>Regulated lender</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
                <span>South African owned</span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4 animate-slide-up">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-card transition-smooth"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;