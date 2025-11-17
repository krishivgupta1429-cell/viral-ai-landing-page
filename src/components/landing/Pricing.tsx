import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "0",
    period: "30 days",
    description: "Try Virality AI with no strings attached",
    features: [
      "Unlimited keyword searches",
      "Access to all viral content data",
      "Basic filters (Video/Photo)",
      "Save up to 50 posts",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Creator",
    price: "29",
    period: "per month",
    description: "Perfect for solo creators and influencers",
    features: [
      "Everything in Free Trial",
      "Unlimited saved posts",
      "Advanced filters & sorting",
      "Content history & search",
      "Multi-platform data",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Pro",
    price: "79",
    period: "per month",
    description: "For agencies and serious content teams",
    features: [
      "Everything in Creator",
      "Team collaboration (5 seats)",
      "Advanced analytics & insights",
      "Export data & reports",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Simple, transparent <span className="text-gradient-primary">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No credit card required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-card border rounded-3xl p-8 ${
                plan.popular
                  ? "border-primary shadow-2xl shadow-primary/20 scale-105"
                  : "border-border"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-background px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
            All plans include a <span className="text-primary font-medium">30-day free trial</span>.
            No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
