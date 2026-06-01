import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { type Product } from "./data";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded-full glass-strong px-2.5 py-1 text-[11px] font-medium text-foreground">
            {product.category}
          </span>
          {product.badge && (
            <span className="rounded-full bg-foreground px-2.5 py-1 text-[11px] font-medium text-background">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl tracking-tight">{product.title}</h3>
            <div className="flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs">
              <Star className="h-3 w-3 fill-foreground text-foreground" />
              {product.rating}
            </div>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">{product.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {product.benefits.map((b) => (
            <li
              key={b}
              className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
          <div className="text-sm font-medium">{product.price}</div>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            aria-label={`View ${product.title} offer`}
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-xs font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
          >
            View offer
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
