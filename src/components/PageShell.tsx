import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-restaurant.jpg";

const brand = {
  name: "Panache Wood Fire Grill",
  city: "Newark, Delaware",
  phone: "(302) 000-0000",
  reserveUrl: "https://panachewoodfiregrill.com",
  menuUrl: "https://panachewoodfiregrill.com",
  privateDiningUrl: "https://panachewoodfiregrill.com",
};

interface PageShellProps {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  primaryCta?: string;
  secondaryCta?: string;
  children: React.ReactNode;
}

export default function PageShell({
  eyebrow,
  title,
  intro,
  primaryCta = "Reserve Now",
  secondaryCta = "Explore the Menu",
  children,
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-lg font-bold text-foreground tracking-tight">
              {brand.name}
            </span>
            <span className="text-xs text-muted-foreground">
              Wood-fired dining in {brand.city}
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a href={brand.menuUrl} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Menu
            </a>
            <a href={brand.reserveUrl}>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Reserve Now
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Panache Wood Fire Grill interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
          <Badge variant="outline" className="mb-4 border-gold/50 text-gold-light bg-black/30 backdrop-blur-sm">
            {eyebrow}
          </Badge>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
            <span className="shimmer-text">{title}</span>
          </h1>
          <p className="text-gold-light/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={brand.reserveUrl}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                {primaryCta} <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href={brand.menuUrl}>
              <Button size="lg" variant="outline" className="border-gold/40 text-gold-light hover:bg-gold/10 bg-black/20 backdrop-blur-sm">
                {secondaryCta}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
            {brand.name}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
            Refined wood-fired dining, date nights, private events, and memorable meals in Newark, Delaware.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold" /> Newark, DE
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-gold" /> {brand.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="w-4 h-4 text-gold" /> Hours &amp; availability TBD
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href={brand.reserveUrl}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Reserve Now
              </Button>
            </a>
            <a href={brand.privateDiningUrl}>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                Private Dining
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { brand };
