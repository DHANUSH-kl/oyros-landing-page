import { Button } from "@/components/ui/button";
import { Phone, Zap, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated Waveform Background - Mobile Optimized */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-32 sm:h-48 lg:h-64 gap-0.5 sm:gap-1">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 sm:w-1 bg-primary rounded-t-full animate-wave"
              style={{
                height: `${Math.random() * 100 + 20}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${1.2 + Math.random() * 0.8}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 pt-20 sm:pt-16 lg:pt-24 pb-8">
        {/* Mobile Layout - Content First, Cards Last */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 min-h-[calc(100vh-4rem)]">
          
          {/* Left Column - Content (Top on Mobile) */}
          <div className="space-y-6 sm:space-y-8 animate-fade-up order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">AI-Powered Voice Solutions</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight text-foreground">
                Complete AI Voice
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite] pb-1">
                Calling Infrastructure
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Deploy intelligent voice agents that handle customer conversations with unprecedented naturalness and efficiency. Transform your communication infrastructure today.
            </p>

            {/* CTA Buttons - Stacked on Mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
  size="lg" 
  className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base py-3"
  onClick={() => window.open("https://calendly.com/gautam-malikwork/discovery-call-with-gautam", "_blank")}
>
  <span className="relative z-10">Book a demo</span>
  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</Button>

<Button 
  size="lg" 
  variant="outline" 
  className="border-border hover:border-accent transition-all duration-300 text-sm sm:text-base py-3"
  onClick={() => window.open("https://www.youtube.com/watch?v=kU8R2m3AKn8&feature=youtu.be", "_blank")}
>
  See oyros in action
</Button>
            </div>

            {/* Stats Row - Horizontal Cards on Mobile */}
            <div className="pt-6 sm:pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                <div className="text-center p-3 rounded-lg bg-card/50 border border-border">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-xs text-muted-foreground mt-1">Uptime</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-card/50 border border-border">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">&lt;200ms</div>
                  <div className="text-xs text-muted-foreground mt-1">Response</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-card/50 border border-border">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground mt-1">Languages</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards (Bottom on Mobile) */}
          <div className="relative flex items-center justify-center order-2 lg:order-2 lg:mt-0">
            <div className="w-full max-w-md">
              {/* Mobile Cards - Horizontal Scroll */}
              <div className="lg:hidden">
                <div className="flex space-x-4 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {/* Card 1 */}
                  <div className="flex-shrink-0 w-64 snap-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    <div className="group relative p-4 rounded-xl bg-card border border-border backdrop-blur-sm transition-all duration-300 hover:border-accent/50">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2">Natural Conversations</h3>
                      <p className="text-xs text-muted-foreground">Context-aware responses that feel genuinely human and adapt to caller needs.</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex-shrink-0 w-64 snap-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
                    <div className="group relative p-4 rounded-xl bg-card border border-border backdrop-blur-sm transition-all duration-300 hover:border-accent/50">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <Zap className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2">Lightning Fast</h3>
                      <p className="text-xs text-muted-foreground">Sub-second response times ensure seamless, real-time conversations.</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex-shrink-0 w-64 snap-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
                    <div className="group relative p-4 rounded-xl bg-card border border-border backdrop-blur-sm transition-all duration-300 hover:border-accent/50">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <MessageSquare className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2">Smart Integration</h3>
                      <p className="text-xs text-muted-foreground">Seamlessly connect with your existing CRM, support, and business tools.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Cards - Original Layout */}
              <div className="hidden lg:grid gap-4 sm:gap-6">
                {/* Card 1 */}
                <div className="group relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
                  <div className="relative p-6 rounded-2xl bg-card border border-border backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Natural Conversations</h3>
                    <p className="text-sm text-muted-foreground">Context-aware responses that feel genuinely human and adapt to caller needs.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative animate-fade-up lg:ml-8" style={{ animationDelay: "0.4s" }}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
                  <div className="relative p-6 rounded-2xl bg-card border border-border backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">Sub-second response times ensure seamless, real-time conversations.</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative animate-fade-up" style={{ animationDelay: "0.6s" }}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
                  <div className="relative p-6 rounded-2xl bg-card border border-border backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Smart Integration</h3>
                    <p className="text-sm text-muted-foreground">Seamlessly connect with your existing CRM, support, and business tools.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;