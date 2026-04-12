import PageShell from "@/components/PageShell";
import ContentSection from "@/components/ContentSection";
import BulletCards from "@/components/BulletCards";
import FAQ from "@/components/FAQ";

export default function PrivateDiningNewarkDE() {
  return (
    <PageShell
      eyebrow="Private Dining in Newark, DE"
      title="Private dining in Newark, DE for events that need the right setting"
      intro="Panache Wood Fire Grill can position its private dining offering for birthdays, rehearsal dinners, business meals, family gatherings, and other special events in Newark, Delaware. This page should make group planning feel polished, simple, and worth inquiring about."
      primaryCta="Inquire About Private Dining"
      secondaryCta="View Event Options"
    >
      <ContentSection title="Events We Host">
        <BulletCards
          items={[
            "Birthday and milestone celebrations",
            "Rehearsal dinners and wedding events",
            "Corporate dinners and team gatherings",
            "Holiday parties and family reunions",
            "Custom menus tailored to your group",
            "Flexible seating and layout options",
          ]}
        />
      </ContentSection>
      <ContentSection
        title="A Seamless Planning Experience"
        body="From your first inquiry to the final toast, the Panache team works to make private dining feel effortless. Custom menus, flexible arrangements, and dedicated service ensure every detail is handled."
      />
      <ContentSection title="Frequently Asked Questions">
        <FAQ
          items={[
            { q: "How many guests can private dining accommodate?", a: "Contact the restaurant for current capacity and layout options for your event." },
            { q: "Can I customize the menu?", a: "Yes. The team works with you to create a menu that fits your group, preferences, and budget." },
            { q: "How far in advance should I book?", a: "We recommend reaching out at least two to four weeks before your event date." },
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
