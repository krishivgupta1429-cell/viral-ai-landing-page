import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Building2, GraduationCap, ShoppingBag } from "lucide-react";

const useCases = [
  {
    id: "creators",
    icon: Users,
    label: "Creators & Influencers",
    title: "Create content that resonates",
    benefits: [
      "Discover trending topics in your niche before they explode",
      "See what content formats perform best (Reels, Carousels, Stories)",
      "Never run out of content ideas with AI-powered suggestions",
    ],
    color: "primary",
  },
  {
    id: "agencies",
    icon: Building2,
    label: "Agencies",
    title: "Scale content production",
    benefits: [
      "Research multiple clients' niches simultaneously",
      "Provide data-backed content strategies to clients",
      "Save hours of manual content research and planning",
    ],
    color: "secondary",
  },
  {
    id: "coaches",
    icon: GraduationCap,
    label: "Coaches & Course Creators",
    title: "Engage your audience",
    benefits: [
      "Find proven educational content formats that convert",
      "Identify the questions your audience is asking",
      "Create valuable content that establishes authority",
    ],
    color: "accent",
  },
  {
    id: "ecom",
    icon: ShoppingBag,
    label: "Ecom & Brands",
    title: "Drive product awareness",
    benefits: [
      "Discover viral product showcase formats",
      "Understand what messaging resonates with buyers",
      "Create content that drives traffic and sales",
    ],
    color: "primary",
  },
];

export const UseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const activeUseCase = useCases.find((uc) => uc.id === activeTab) || useCases[0];

  return (
    <section id="use-cases" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Built for <span className="text-gradient-primary">everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're creating content or building a brand, Virality AI has you covered
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === useCase.id
                    ? "bg-gradient-to-r from-primary to-secondary text-background shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <useCase.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{useCase.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-3xl p-8 sm:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${activeUseCase.color} to-secondary flex items-center justify-center`}
                >
                  <activeUseCase.icon className="h-8 w-8 text-background" />
                </div>
                <div>
                  <div className="text-sm text-primary font-medium mb-1">
                    {activeUseCase.label}
                  </div>
                  <h3 className="text-3xl font-bold">{activeUseCase.title}</h3>
                </div>
              </div>

              <ul className="space-y-4">
                {activeUseCase.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-lg text-foreground/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
