import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import { Hero3D } from "./Hero3D";

export const HeroSection = () => {
  const scrollToNextSection = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Find viral content ideas in{" "}
              <span className="text-gradient-primary">2 clicks</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Type any keyword, and instantly get proven high-performing content ideas with real
            data – so you can create posts that actually go viral.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Try Virality AI Free
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              <Play className="mr-2 h-5 w-5" />
              Watch Tutorial
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              No credit card required
            </span>
            <span className="hidden sm:inline">•</span>
            <span>30 days free</span>
            <span className="hidden sm:inline">•</span>
            <span>Cancel anytime</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-secondary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};
