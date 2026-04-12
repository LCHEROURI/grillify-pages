import PageShell from "@/components/PageShell";
import ContentSection from "@/components/ContentSection";
import BulletCards from "@/components/BulletCards";
import FAQ from "@/components/FAQ";

export default function PrivateDiningBlueBellPA() {
  return (
    <PageShell
      eyebrow="Private Dining in Blue Bell, PA"
      title="Private dining in Blue Bell, PA for events that need the right setting"
      intro="Panache Wood Fire Grill offers private dining for birthdays, rehearsal dinners, business meals, family gatherings, and other special events in Blue Bell, Pennsylvania. Group planning is polished, simple, and worth inquiring about."
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
            { q: "How many guests can private dining accommodate?", a: "Contact the restaurant at (215) 641-9000 for current capacity and layout options for your event." },
            { q: "Can I customize the menu?", a: "Yes. The team works with you to create a menu that fits your group, preferences, and budget." },
            { q: "How far in advance should I book?", a: "We recommend reaching out at least two to four weeks before your event date." },
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
