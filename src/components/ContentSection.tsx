import React from "react";

interface ContentSectionProps {
  title: string;
  body?: string;
  children?: React.ReactNode;
}

export default function ContentSection({ title, body, children }: ContentSectionProps) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{title}</h2>
      {body && <p className="text-muted-foreground leading-relaxed mb-4">{body}</p>}
      {children && <div className="text-muted-foreground leading-relaxed">{children}</div>}
    </section>
  );
}
