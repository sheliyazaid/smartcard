import { Github, Sparkles, Twitter, Youtube } from "lucide-react";

const cols = [
  { title: "Platform", links: ["Discover", "Categories", "Top Picks", "Compare"] },
  { title: "Company", links: ["About", "Contact", "Blog", "Press"] },
  { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Affiliate Disclosure", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_repeat(3,_1fr)]">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-foreground text-background">
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">SmartCard</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A curated marketplace for digital products that actually deliver results.
            </p>
            <div className="mt-6 flex gap-2">
              {[Twitter, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-background text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border/60 bg-background/60 p-5 text-xs leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Affiliate disclosure:</span> SmartCard is a participant in the
          Digistore24 affiliate program. We may earn a commission when you purchase through links on this site,
          at no additional cost to you. Our editorial picks are independent and never influenced by partner status.
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} SmartCard. All rights reserved.</div>
          <div>Made with care · Lovable</div>
        </div>
      </div>
    </footer>
  );
}
