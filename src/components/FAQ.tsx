import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-4 mt-4">
      {items.map((item) => (
        <Card key={item.q} className="bg-card border-border">
          <CardContent className="pt-6">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
