import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, TrendingUp, Save } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Enter your niche or keyword",
    description: "Simply type what you want to create content about – fitness, travel, tech, anything.",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Instantly see viral posts with metrics",
    description: "Get real content ideas that performed well, complete with likes, comments, and views.",
  },
  {
    icon: Save,
    number: "03",
    title: "Save, organize, and turn them into your own content",
    description: "Build your content library and transform viral ideas into your unique posts.",
  },
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="how-it-works" ref={containerRef} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Gradient */}
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
            How it <span className="text-gradient-primary">works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to discover viral content ideas
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mock App UI */}
            <motion.div
              className="relative"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [100, -100]),
              }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl card-glow">
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="bg-background border border-border rounded-lg p-4 flex items-center gap-3">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Enter your keyword..."
                      className="bg-transparent border-none outline-none flex-1 text-foreground"
                      readOnly
                      value="fitness motivation"
                    />
                  </div>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["All", "Reels", "Carousels", "Stories"].map((filter) => (
                    <div
                      key={filter}
                      className={`px-4 py-2 rounded-full text-sm ${
                        filter === "Reels"
                          ? "bg-primary text-background"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {filter}
                    </div>
                  ))}
                </div>

                {/* Content Cards */}
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-background border border-border rounded-lg p-4 hover:border-primary transition-colors"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-lg flex-shrink-0" />
                        <div className="flex-1">
                          <div className="font-medium mb-2">Viral Post Title #{item}</div>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>❤️ 45.2K</span>
                            <span>💬 892</span>
                            <span>👁️ 234K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-background" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-mono mb-2">{step.number}</div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
