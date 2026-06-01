import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { products } from "./data";

export function FeaturedProducts() {
  return (
    <section id="discover" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between gap-6"
        >
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Featured
            </div>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Products people <span className="italic text-gradient">come back for.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground sm:block">
            Hand-picked tools used by founders, designers, and operators we actually trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
