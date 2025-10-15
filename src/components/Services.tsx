import { Phone, Clock, Link2, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Solutions
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful <span className="bg-gradient-primary bg-clip-text text-transparent">AI Voice</span> Services
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto">
            End-to-end voice automation platform designed to scale your business operations and maximize conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative border-border bg-white hover:bg-white transition-all duration-500 cursor-pointer animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Elegant Accent Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 rounded-lg" />

              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Icon Container with Elegant Design */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-500">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="absolute -inset-2 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <CardTitle className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-foreground/70 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>

                    {/* Subtle Progress Line */}
                    <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-500 delay-100" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sophisticated CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-white border border-border rounded-2xl px-8 py-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Ready to transform your outreach?</h3>
              <p className="text-foreground/60">Join hundreds of businesses scaling with AI voice</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all">
                Start Free Trial
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;