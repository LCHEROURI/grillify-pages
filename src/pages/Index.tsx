import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Building2, UtensilsCrossed, Calendar } from "lucide-react";

const pages = [
  {
    slug: "/best-restaurant-blue-bell-pa",
    title: "Best Restaurant in Blue Bell, PA",
    description: "Top-of-funnel local discovery page for diners searching for the best restaurant in Blue Bell.",
    icon: Star,
  },
  {
    slug: "/romantic-restaurant-blue-bell-pa",
    title: "Romantic Restaurant in Blue Bell, PA",
    description: "High-converting page for date night and anniversary intent.",
    icon: Heart,
  },
  {
    slug: "/private-dining-blue-bell-pa",
    title: "Private Dining in Blue Bell, PA",
    description: "Lead-generation page for event and group dining inquiries.",
    icon: Building2,
  },
  {
    slug: "/steakhouse-blue-bell-pa",
    title: "Steakhouse in Blue Bell, PA",
    description: "Cuisine-intent page built around wood-fired dining and premium experience.",
    icon: UtensilsCrossed,
  },
  {
    slug: "/date-night-blue-bell-pa",
    title: "Date Night in Blue Bell, PA",
    description: "Occasion page designed to turn date-night searchers into reservations.",
    icon: Heart,
  },
  {
    slug: "/business-dinner-blue-bell-pa",
    title: "Business Dinner in Blue Bell, PA",
    description: "Weekday demand page for client meals and professional gatherings.",
    icon: Calendar,
  },
];

export default function PanacheSEOIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-4">
          <div className="w-12 h-1 bg-gold rounded-full mb-6" />
        </div>
        <Badge variant="outline" className="mb-4 border-gold/40 text-gold">
          Six SEO Page Files
        </Badge>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          <span className="shimmer-text">
            Publish-ready page files to help Panache close the visibility gap in Blue Bell, PA
          </span>
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          This file contains six separate page components mapped to target URLs for Blue Bell, Pennsylvania. Real phone number, reservation links, and hours are included.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <Link key={page.slug} to={page.slug} className="group">
                <Card className="bg-card border-border hover:border-gold/40 transition-colors h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-muted p-2">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h2 className="font-serif font-semibold text-foreground group-hover:text-gold transition-colors">
                          {page.title}
                        </h2>
                        <p className="text-xs text-muted-foreground font-mono">{page.slug}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{page.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
