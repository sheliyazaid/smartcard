import { motion } from "framer-motion";
import { Eye, HandHeart, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: HandHeart,
    title: "Handpicked",
    body: "Every product is selected by a real human editor — never paid placement.",
  },
  {
    icon: ShieldCheck,
    title: "Quality first",
    body: "We test, use, and stress-test products before they ever reach this page.",
  },
  {
    icon: Eye,
    title: "Honest reviews",
    body: "Real strengths, real trade-offs. We tell you what doesn't work, too.",
  },
  {
    icon: Sparkles,
    title: "Trusted sources",
    body: "Secure checkout via Digistore24. 30-day refund on most listings.",
  },
];

export function WhyTrust() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Why SmartCard
            </div>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              We say <span className="italic text-gradient">no</span> a lot — so you don't have to.
            </h2>
            <p className="mt-5 text-muted-foreground">
              For every product you see here, we've quietly rejected ten others.
              That's the difference between a marketplace and a curation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition-all hover:shadow-elevated"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-secondary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-xl tracking-tight">{p.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
