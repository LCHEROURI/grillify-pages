import PageShell from "@/components/PageShell";
import ContentSection from "@/components/ContentSection";
import BulletCards from "@/components/BulletCards";
import FAQ from "@/components/FAQ";

export default function RomanticRestaurantNewarkDE() {
  return (
    <PageShell
      eyebrow="Romantic Restaurant in Newark, DE"
      title="A romantic restaurant in Newark, DE for date nights, anniversaries, and unforgettable evenings"
      intro="For couples searching for a romantic restaurant in Newark, DE, Panache Wood Fire Grill offers the right mix of ambiance, attentive service, elevated dining, and wood-fired flavor. It is the kind of setting that helps turn an ordinary dinner into a night worth remembering."
      primaryCta="Plan Your Evening"
    >
      <ContentSection title="What Makes It Romantic?">
        <BulletCards
          items={[
            "Warm, candlelit atmosphere with intimate seating",
            "Craft cocktails and a curated wine list for sharing",
            "Wood-fired dishes that feel special without being fussy",
            "Attentive but unobtrusive service",
            "A setting that encourages conversation and connection",
          ]}
        />
      </ContentSection>
      <ContentSection
        title="For Every Kind of Date Night"
        body="Whether it is a first date, a milestone anniversary, or a Tuesday night that deserves something better, Panache creates the kind of experience that couples come back for."
      />
      <ContentSection title="Frequently Asked Questions">
        <FAQ
          items={[
            { q: "Is Panache a good date night restaurant?", a: "Absolutely. The ambiance, food, and service are all designed to make evenings feel special." },
            { q: "Can I request a specific table?", a: "Table requests can be noted at the time of reservation and the team will do their best to accommodate." },
            { q: "Does Panache offer prix fixe or special menus?", a: "Check with the restaurant for seasonal tasting menus and special event offerings." },
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
