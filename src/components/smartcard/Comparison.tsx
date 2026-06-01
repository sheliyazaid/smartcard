import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { products } from "./data";

const compared = [products[0], products[1], products[3]];

const rows: { label: string; values: (boolean | string)[] }[] = [
  { label: "Best for", values: ["Writers & marketers", "Solo founders", "Knowledge workers"] },
  { label: "Lifetime updates", values: [true, true, false] },
  { label: "Mobile app", values: [true, false, true] },
  { label: "Community access", values: [true, true, false] },
  { label: "Money-back guarantee", values: ["30 days", "30 days", "14 days"] },
  { label: "Pricing", values: [compared[0].price, compared[1].price, compared[2].price] },
];

export function Comparison() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Compare
          </div>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Side-by-side, <span className="italic text-gradient">at a glance.</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
          <div className="grid grid-cols-[1.4fr_repeat(3,_1fr)] divide-x divide-border/60 border-b border-border/60 bg-secondary/40">
            <div className="px-6 py-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Feature
            </div>
            {compared.map((p) => (
              <div key={p.id} className="px-6 py-5">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</div>
                <div className="mt-1 font-display text-lg tracking-tight">{p.title}</div>
              </div>
            ))}
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.4fr_repeat(3,_1fr)] divide-x divide-border/60 ${
                i % 2 === 1 ? "bg-secondary/20" : ""
              }`}
            >
              <div className="px-6 py-4 text-sm text-muted-foreground">{row.label}</div>
              {row.values.map((v, j) => (
                <div key={j} className="px-6 py-4 text-sm">
                  {typeof v === "boolean" ? (
                    v ? (
                      <Check className="h-4 w-4 text-foreground" />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground" />
                    )
                  ) : (
                    v
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="grid grid-cols-[1.4fr_repeat(3,_1fr)] divide-x divide-border/60 border-t border-border/60 bg-secondary/40">
            <div />
            {compared.map((p) => (
              <div key={p.id} className="p-4">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  View offer
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
