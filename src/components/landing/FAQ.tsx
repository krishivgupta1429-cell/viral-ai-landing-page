import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where does the data come from?",
    answer:
      "We analyze millions of public posts across Instagram, TikTok, YouTube, Twitter, and other platforms to identify viral content patterns. All data is gathered ethically and in compliance with platform guidelines.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Virality AI currently supports Instagram, TikTok, YouTube, Twitter (X), Facebook, and LinkedIn. We're constantly adding new platforms based on user demand.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Our database is updated in real-time. When you search for a keyword, you're seeing the latest viral content and performance metrics from the past 24-48 hours.",
  },
  {
    question: "Can I use this for client work?",
    answer:
      "Absolutely! Many agencies and freelancers use Virality AI to research content for their clients. Our Pro plan includes team collaboration features and data exports for client presentations.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! All plans come with a 30-day free trial. No credit card required to start. You can explore all features and decide if it's right for you before committing.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no penalties or fees. Your access will continue until the end of your current billing period.",
  },
  {
    question: "What if I need help getting started?",
    answer:
      "We offer comprehensive documentation, video tutorials, and email support for all users. Pro plan members get priority support and a dedicated account manager.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied with Virality AI, just let us know and we'll issue a full refund.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-32 relative overflow-hidden">
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
            Frequently asked <span className="text-gradient-primary">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
