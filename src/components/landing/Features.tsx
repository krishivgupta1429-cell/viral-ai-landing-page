import { motion } from "framer-motion";
import { Sparkles, BarChart3, Filter, Clock, Database, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Driven Content Ideation",
    description: "Let AI find the best performing content in your niche instantly.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: BarChart3,
    title: "Real-Time Performance Metrics",
    description: "See likes, comments, views, and engagement rates for every post.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Filter,
    title: "Video & Photo Filters",
    description: "Filter by content type – Reels, Carousels, Stories, Posts, and more.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Clock,
    title: "Save & Search History",
    description: "Build your personal content library and never lose a great idea.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Database,
    title: "Multi-Platform Support",
    description: "Works with Instagram, TikTok, YouTube, Twitter, and more.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Get hundreds of viral content ideas in seconds, not hours.",
    gradient: "from-accent to-secondary",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Powerful <span className="text-gradient-primary">features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to discover, organize, and create viral content
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 card-glow-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-7 w-7 text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
