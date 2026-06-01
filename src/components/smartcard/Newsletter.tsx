import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-8 py-16 text-background sm:px-16 sm:py-20"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[oklch(0.7_0.18_275)] opacity-30 blur-3xl" />
            <div className="absolute -bottom-32 -right-10 h-96 w-96 rounded-full bg-[oklch(0.8_0.15_50)] opacity-25 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
                <Mail className="h-3.5 w-3.5" /> Weekly drop
              </div>
              <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                One email. <em className="not-italic text-[oklch(0.85_0.1_50)]">Three</em> products worth your time.
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Get the week's best digital tools, courses, and software — straight to your inbox.
                No spam, unsubscribe anytime.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 pl-5 backdrop-blur">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Subscribe
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="px-2 text-xs text-white/50">Join 12,000+ thoughtful buyers.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
