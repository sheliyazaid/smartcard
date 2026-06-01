import { motion } from "framer-motion";
import { ArrowUpRight, Search, ShieldCheck, Sparkles, Star } from "lucide-react";
import { products } from "./data";

const featured = products[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      {/* Animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-[oklch(0.88_0.1_275)] opacity-50 blur-3xl animate-blob" />
        <div className="absolute -right-20 top-32 h-[360px] w-[360px] rounded-full bg-[oklch(0.9_0.08_50)] opacity-50 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-10 h-[320px] w-[320px] rounded-full bg-[oklch(0.9_0.08_220)] opacity-40 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft"
          >
            <span className="grid h-4 w-4 place-items-center rounded-full bg-foreground text-background">
              <Sparkles className="h-2.5 w-2.5" />
            </span>
            New · 132 handpicked products this season
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Discover digital products
            <br />
            that actually <span className="text-gradient italic">deliver results.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground"
          >
            SmartCard is a curated marketplace of premium software, courses, and
            tools — reviewed by humans, loved by professionals.
          </motion.p>

          <motion.form
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full glass-strong p-1.5 pl-5 shadow-elevated"
          >
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search AI tools, courses, software…"
              className="flex-1 bg-transparent py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
            >
              Search
            </button>
          </motion.form>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Manually vetted</div>
            <div className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-current" /> 4.8 avg rating</div>
            <div className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> 40k+ buyers served</div>
          </motion.div>
        </motion.div>

        {/* Featured floating card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="absolute -inset-x-12 -inset-y-8 -z-10 rounded-[3rem] bg-gradient-to-br from-white/40 to-white/10 blur-2xl" />
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl glass-strong shadow-elevated md:grid-cols-[1.1fr_1fr]">
            <div className="relative aspect-[5/4] md:aspect-auto">
              <img
                src={featured.image}
                alt={featured.title}
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-foreground/90 px-3 py-1 text-[11px] font-medium text-background backdrop-blur">
                <Sparkles className="h-3 w-3" /> Editor's Choice
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 p-8">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {featured.category}
                </div>
                <h3 className="mt-2 font-display text-3xl tracking-tight">{featured.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{featured.tagline}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-foreground text-foreground" /> {featured.rating}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{featured.reviews.toLocaleString()} reviews</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{featured.price}</span>
                </div>
              </div>
              <a
                href={featured.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group inline-flex items-center justify-between rounded-2xl bg-foreground px-5 py-4 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.99]"
              >
                <span>View this offer on Digistore24</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
