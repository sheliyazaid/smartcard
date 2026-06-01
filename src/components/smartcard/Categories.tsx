import { motion } from "framer-motion";
import { ArrowRight, Brain, Briefcase, GraduationCap, HeartPulse, LineChart, Megaphone, Wallet } from "lucide-react";
import { categories } from "./data";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "AI Tools": Brain,
  Business: Briefcase,
  Marketing: Megaphone,
  Productivity: LineChart,
  Education: GraduationCap,
  Finance: Wallet,
  "Health & Fitness": HeartPulse,
};

export function Categories() {
  return (
    <section id="categories" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Categories
          </div>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Browse what <span className="italic text-gradient">moves you forward.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = icons[cat.name] ?? Brain;
            return (
              <motion.a
                key={cat.name}
                href="#discover"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative flex h-44 flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br ${cat.gradient} p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated`}
              >
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/70 text-foreground shadow-soft backdrop-blur">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-medium tracking-tight">{cat.name}</div>
                  <div className="mt-0.5 flex items-center justify-between text-xs text-foreground/60">
                    <span>{cat.count} products</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
