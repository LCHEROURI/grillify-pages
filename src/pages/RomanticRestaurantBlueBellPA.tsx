import PageShell from "@/components/PageShell";
import ContentSection from "@/components/ContentSection";
import BulletCards from "@/components/BulletCards";
import FAQ from "@/components/FAQ";

export default function RomanticRestaurantBlueBellPA() {
  return (
    <PageShell
      eyebrow="Romantic Restaurant in Blue Bell, PA"
      title="A romantic restaurant in Blue Bell, PA for date nights, anniversaries, and unforgettable evenings"
      intro="For couples searching for a romantic restaurant in Blue Bell, PA, Panache Wood Fire Grill offers the right mix of ambiance, live music, attentive service, elevated dining, and wood-fired flavor. It is the kind of setting that helps turn an ordinary dinner into a night worth remembering."
      primaryCta="Plan Your Evening"
    >
      <ContentSection title="What Makes It Romantic?">
        <BulletCards
          items={[
            "Warm atmosphere with intimate seating and live music",
            "Craft cocktails and a curated wine list for sharing",
            "Wood-fired dishes that feel special without being fussy",
            "Outdoor patio with cozy fire pits under the stars",
            "Attentive but unobtrusive service",
            "A setting that encourages conversation and connection",
          ]}
        />
      </ContentSection>
      <ContentSection
        title="For Every Kind of Date Night"
        body="Whether it is a first date, a milestone anniversary, or a Tuesday night that deserves something better, Panache creates the kind of experience that couples come back for. With live music Thursday through Saturday, every evening has its own atmosphere."
      />
      <ContentSection title="Frequently Asked Questions">
        <FAQ
          items={[
            { q: "Is Panache a good date night restaurant?", a: "Absolutely. The ambiance, live music, food, and service are all designed to make evenings feel special." },
            { q: "Can I request a specific table?", a: "Table requests can be noted at the time of reservation through OpenTable and the team will do their best to accommodate." },
            { q: "Does Panache offer prix fixe or special menus?", a: "Check with the restaurant for seasonal tasting menus and special event offerings." },
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
