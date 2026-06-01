import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const nav = [
  { label: "Discover", href: "#discover" },
  { label: "Categories", href: "#categories" },
  { label: "Top Picks", href: "#top-picks" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between gap-6 rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-soft" : "glass"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 pl-3">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-foreground text-background">
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">SmartCard</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#discover"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background shadow-soft transition-all hover:opacity-90 active:scale-[0.98]"
        >
          Browse products
        </a>
      </div>
    </motion.header>
  );
}
