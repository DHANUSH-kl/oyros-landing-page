import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/15 to-primary/5">
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            AI Voice Technology Platform
          </div>

          {/* Headline - Reduced mobile size */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Complete AI Voice
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2 pb-3">
              Calling Infrastructure
            </span>
          </h1>

          {/* CTA Buttons - Increased margin since subtext removed */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 py-6 font-semibold"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8 py-6 font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-card transition-all">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-foreground/60 text-sm font-medium">Lead Engagement</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-card transition-all">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                10x
              </div>
              <div className="text-foreground/60 text-sm font-medium">Conversion Rate</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-card transition-all">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-foreground/60 text-sm font-medium">Scalable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Wave - More dramatic curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-20 lg:h-28 fill-background"
        >
          <path 
            d="M0,0 C400,80 800,60 1200,0 L1200,120 L0,120 Z" 
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;