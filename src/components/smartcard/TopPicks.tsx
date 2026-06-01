import { motion } from "framer-motion";
import { Award, Flame, ShoppingBag, TrendingUp } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products } from "./data";

const tabs = [
  { label: "Editor's Choice", icon: Award, ids: ["neural-write", "founder-os", "deepwork"] },
  { label: "Trending", icon: Flame, ids: ["growth-loop", "neural-write", "vital-routine"] },
  { label: "Best Sellers", icon: ShoppingBag, ids: ["founder-os", "deepwork", "skillforge"] },
  { label: "Most Popular", icon: TrendingUp, ids: ["deepwork", "neural-write", "ledger-zen"] },
];

import { useState } from "react";

export function TopPicks() {
  const [active, setActive] = useState(0);
  const list = tabs[active].ids.map((id) => products.find((p) => p.id === id)!);

  return (
    <section id="top-picks" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Top picks
            </div>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              What's <span className="italic text-gradient">winning</span> this month.
            </h2>
          </motion.div>

          <div className="inline-flex flex-wrap gap-1 rounded-full glass p-1 shadow-soft">
            {tabs.map((t, i) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.label}
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    active === i
                      ? "bg-foreground text-background shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
