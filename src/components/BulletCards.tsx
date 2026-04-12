import React from "react";

export default function BulletCards({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 mt-4">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-lg border border-border bg-card p-4 text-sm text-card-foreground"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
