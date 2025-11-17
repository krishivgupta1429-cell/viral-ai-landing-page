import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="text-xl sm:text-2xl font-bold text-gradient-primary">
              Virality AI
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button variant="hero" size="sm" className="sm:size-default">
              Try Free
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
