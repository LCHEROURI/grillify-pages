import PageShell from "@/components/PageShell";
import ContentSection from "@/components/ContentSection";
import BulletCards from "@/components/BulletCards";
import FAQ from "@/components/FAQ";

export default function DateNightBlueBellPA() {
  return (
    <PageShell
      eyebrow="Date Night in Blue Bell, PA"
      title="Date night in Blue Bell, PA starts with a restaurant that feels like an occasion"
      intro="Couples searching for date night in Blue Bell, PA are choosing the setting as much as the menu. Panache Wood Fire Grill captures that intent with atmosphere, craft cocktails, wood-fired dishes, live music, and a reservation-worthy evening."
      primaryCta="Book Date Night"
    >
      <ContentSection title="What Makes a Great Date Night?">
        <BulletCards
          items={[
            "A restaurant with atmosphere that sets the tone",
            "Craft cocktails to start the evening right",
            "Wood-fired dishes meant to be shared and savored",
            "Live music Thursday through Saturday to set the mood",
            "Outdoor patio with fire pits for a unique experience",
            "Service that feels personal, not rushed",
          ]}
        />
      </ContentSection>
      <ContentSection
        title="Make It a Ritual"
        body="The best date nights are the ones you repeat. Panache is designed for couples who want a go-to spot that never feels routine — with a seasonal menu, rotating specials, live entertainment, and an experience that rewards return visits."
      />
      <ContentSection title="Frequently Asked Questions">
        <FAQ
          items={[
            { q: "Is Panache good for a first date?", a: "Yes. The atmosphere is warm and inviting without being intimidating, making it ideal for any stage of a relationship." },
            { q: "Do you have bar seating for two?", a: "Bar seating is available and can be a great option for a more casual, connected experience." },
            { q: "What about drinks?", a: "The cocktail and wine program is designed to complement wood-fired cuisine and set the tone for the evening." },
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
