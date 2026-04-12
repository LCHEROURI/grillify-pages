import PageShell from "@/components/PageShell";
import ContentSection from "@/components/ContentSection";
import BulletCards from "@/components/BulletCards";
import FAQ from "@/components/FAQ";

export default function BusinessDinnerNewarkDE() {
  return (
    <PageShell
      eyebrow="Business Dinner in Newark, DE"
      title="A polished choice for business dinner in Newark, DE"
      intro="For client meals, executive dinners, team celebrations, and professional gatherings, Panache Wood Fire Grill can position itself as one of the most polished business dinner options in Newark, Delaware. This page is built to capture weekday demand and higher-value reservations."
      primaryCta="Plan a Business Dinner"
    >
      <ContentSection title="Why Panache for Business">
        <BulletCards
          items={[
            "A setting that makes the right impression on clients and colleagues",
            "Private and semi-private dining options for focused conversation",
            "A menu built around quality and consistency",
            "Attentive, professional service",
            "Convenient location in Newark, Delaware",
            "Custom options for group dining and corporate events",
          ]}
        />
      </ContentSection>
      <ContentSection
        title="The Right Setting for the Right Conversation"
        body="Whether you are closing a deal, celebrating a win, or hosting a team, Panache provides the backdrop for productive, memorable business meals."
      />
      <ContentSection title="Frequently Asked Questions">
        <FAQ
          items={[
            { q: "Can I book a private space for a business dinner?", a: "Yes. Contact the restaurant to discuss private and semi-private dining options for your group." },
            { q: "Is there AV or presentation capability?", a: "Reach out to the events team to discuss any technical needs for your gathering." },
            { q: "Can I arrange a pre-set menu?", a: "Absolutely. Pre-set menus simplify the dining experience and keep the focus on your guests." },
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
