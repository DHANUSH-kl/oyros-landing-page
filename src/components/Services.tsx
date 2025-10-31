import { Phone, Clock, Link2, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Lead Engagement",
    description: "Engage and qualify leads automatically through AI voice calls that feel natural and human-like.",
  },
  {
    icon: Clock,
    title: "24/7 Customer Outreach", 
    description: "Never miss a potential customer — AI handles calls round the clock, even when your team is offline.",
  },
  {
    icon: Link2,
    title: "CRM Integration",
    description: "Seamlessly connect Oyros with HubSpot, Salesforce, or your existing CRM system.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time dashboards to measure call outcomes, conversion rates, and ROI.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Our Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Powerful AI Voice{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            End-to-end voice automation platform designed to scale your business operations and maximize conversions.
          </p>
        </div>

        {/* Services Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Vertical connecting line - Hidden on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" 
               style={{ left: '60px' }} />
          
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-[120px_1fr] xl:grid-cols-[160px_1fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
                  
                  {/* Left Column - Number & Icon */}
                  <div className="flex items-center gap-4 sm:gap-6 lg:flex-col lg:items-center lg:gap-0">
                    {/* Number & Timeline Dot Container */}
                    <div className="flex items-center gap-4 sm:gap-6 lg:flex-col lg:gap-2">
                      {/* Large Number */}
                      <div className="relative">
                        <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400/30 to-purple-600/20 group-hover:from-purple-400/50 group-hover:to-purple-600/40 group-hover:drop-shadow-lg transition-all duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {/* Timeline dot - Hidden on mobile */}
                        <div className="hidden lg:block absolute -right-4 xl:-right-8 top-1/2 -translate-y-1/2 w-3 h-3 xl:w-4 xl:h-4 rounded-full border-2 border-purple-300 bg-background group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all duration-500" />
                      </div>
                      
                      {/* Mobile connecting line between number and icon */}
                      <div className="lg:hidden w-8 h-px bg-border/50" />
                    </div>
                    
                    {/* Icon */}
                    <div className="lg:mt-4 xl:mt-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-purple-500/10 border border-purple-300/30 flex items-center justify-center group-hover:border-purple-400/60 group-hover:bg-purple-500/20 transition-all duration-500">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-500" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="space-y-3 sm:space-y-4 pb-6 sm:pb-8 border-b border-border/50 group-hover:border-purple-300/50 transition-all duration-500">
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-purple-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover indicator line */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2">
                      <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-purple-500 to-transparent" />
                      <span className="text-xs sm:text-sm font-medium text-purple-600">Explore capability</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 lg:mt-32 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="text-center lg:text-left space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                    Ready to transform your outreach?
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                    Join hundreds of businesses scaling with AI voice
                  </p>
                </div>
                
                <button 
                  onClick={() => window.open("https://calendly.com/gautam-malikwork/discovery-call-with-gautam", "_blank")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg sm:rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    Book Demo
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;