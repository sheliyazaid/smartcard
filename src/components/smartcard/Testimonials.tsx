import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "SmartCard saved me weeks of trial-and-error. Every product I bought through them has actually stuck in my workflow.",
    name: "Mira Chen",
    role: "Indie founder",
    initials: "MC",
  },
  {
    quote: "Finally a place that treats affiliate links like recommendations from a friend, not a popup farm.",
    name: "Daniel Akande",
    role: "Head of Growth, Fernpath",
    initials: "DA",
  },
  {
    quote: "I trust the reviews here more than most YouTube channels. They actually mention the bad parts.",
    name: "Sofia Reyes",
    role: "Product designer",
    initials: "SR",
  },
  {
    quote: "Bought three tools from SmartCard last quarter. All three are still in my dock six months later.",
    name: "Jonas Weber",
    role: "Marketing consultant",
    initials: "JW",
  },
  {
    quote: "Clean, fast, honest. It's how a good shop used to feel before everything became an ad.",
    name: "Aisha Patel",
    role: "Creator",
    initials: "AP",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Loved by buyers
          </div>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Real users. <span className="italic text-gradient">Real wins.</span>
          </h2>
        </motion.div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft"
            >
              <div className="flex gap-0.5 text-foreground">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.9_0.08_275)] to-[oklch(0.9_0.08_50)] text-xs font-medium">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
