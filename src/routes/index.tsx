import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/smartcard/Header";
import { Hero } from "@/components/smartcard/Hero";
import { FeaturedProducts } from "@/components/smartcard/FeaturedProducts";
import { Categories } from "@/components/smartcard/Categories";
import { TopPicks } from "@/components/smartcard/TopPicks";
import { WhyTrust } from "@/components/smartcard/WhyTrust";
import { Comparison } from "@/components/smartcard/Comparison";
import { Testimonials } from "@/components/smartcard/Testimonials";
import { Newsletter } from "@/components/smartcard/Newsletter";
import { FAQ } from "@/components/smartcard/FAQ";
import { Footer } from "@/components/smartcard/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartCard — Discover digital products that actually deliver results." },
      {
        name: "description",
        content:
          "SmartCard is a curated marketplace of premium AI tools, software, courses, and business resources — handpicked, honestly reviewed, and trusted by 40,000+ buyers.",
      },
      { property: "og:title", content: "SmartCard — A curated marketplace for digital products." },
      {
        property: "og:description",
        content:
          "Handpicked AI tools, courses, software, and business resources. Reviewed by humans, loved by professionals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SmartCard",
          description:
            "Curated marketplace for premium digital products: AI tools, software, courses, and business resources.",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <TopPicks />
        <WhyTrust />
        <Comparison />
        <Testimonials />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
