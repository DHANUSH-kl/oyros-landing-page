import { Play } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            See <span className="bg-gradient-primary bg-clip-text text-transparent">Oyros</span> in Action
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto">
            Watch how our AI voice agents transform customer engagement and drive real results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-card border border-border group cursor-pointer">
            {/* YouTube Thumbnail Placeholder */}
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all">
                  <Play className="h-10 w-10 lg:h-12 lg:w-12 text-primary-foreground ml-1" />
                </div>
                <p className="text-foreground/80 text-lg lg:text-xl font-medium">Click to watch demo</p>
              </div>
            </div>
            
            {/* Actual link */}
            <a
              href="https://youtube.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Watch demo video"
            >
              <span className="sr-only">Watch demo video</span>
            </a>
          </div>

          {/* Stats Below Video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-foreground/60">Answer Rate</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                3x
              </div>
              <div className="text-foreground/60">More Qualified Leads</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                60%
              </div>
              <div className="text-foreground/60">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
