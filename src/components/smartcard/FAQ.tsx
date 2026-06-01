import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is SmartCard?",
    a: "SmartCard is a curated marketplace where we feature only digital products we've personally vetted. When you buy through our links, you get the same price — and we earn a small commission.",
  },
  {
    q: "How do purchases work?",
    a: "Every product redirects to its official Digistore24 page, where you complete checkout securely. SmartCard never handles your payment information directly.",
  },
  {
    q: "Are the reviews honest?",
    a: "Yes. We only feature products we'd recommend to a friend, and we mention real drawbacks. If a product doesn't meet our bar, it doesn't get listed.",
  },
  {
    q: "Do you offer refunds?",
    a: "Refunds are handled by Digistore24 and the individual product creators. Most listings on SmartCard include a 30-day money-back guarantee.",
  },
  {
    q: "How do you make money?",
    a: "We earn affiliate commissions when you purchase through our links. This never affects the price you pay — and it lets us keep SmartCard free and ad-light.",
  },
  {
    q: "How often is the catalog updated?",
    a: "We review and refresh the catalog every week. New products are added, and underperformers are quietly retired.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            FAQ
          </div>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Questions, <span className="italic text-gradient">answered.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Can't find what you're looking for? Email us at{" "}
            <a href="mailto:hello@smartcard.app" className="text-foreground underline underline-offset-4">
              hello@smartcard.app
            </a>
            .
          </p>
        </motion.div>

        <div className="divide-y divide-border/60 rounded-3xl border border-border/60 bg-card shadow-soft">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary/40"
                >
                  <span className="text-[15px] font-medium tracking-tight">{f.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border/70 bg-background transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
