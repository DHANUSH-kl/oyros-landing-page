import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small teams testing AI voice outreach",
    features: [
      "Up to 1,000 calls/month",
      "Basic CRM integration",
      "Email support",
      "Standard analytics dashboard",
      "1 voice agent",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "/month",
    description: "For growing businesses scaling their outreach",
    features: [
      "Up to 10,000 calls/month",
      "Advanced CRM integrations",
      "Priority support",
      "Advanced analytics & reporting",
      "5 voice agents",
      "Custom voice training",
      "A/B testing",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale operations",
    features: [
      "Unlimited calls",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "Unlimited voice agents",
      "White-label options",
      "SLA guarantee",
      "Advanced security",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border hover:shadow-card transition-all animate-fade-in ${
                plan.featured
                  ? "border-2 border-primary shadow-glow scale-105 md:scale-110"
                  : "hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl lg:text-3xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60">{plan.period}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.featured
                      ? "bg-gradient-primary hover:shadow-glow"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
