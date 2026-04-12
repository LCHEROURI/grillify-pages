import PageShell from "@/components/PageShell";
import ContentSection from "@/components/ContentSection";
import BulletCards from "@/components/BulletCards";
import FAQ from "@/components/FAQ";

export default function SteakhouseNewarkDelaware() {
  return (
    <PageShell
      eyebrow="Steakhouse in Newark, Delaware"
      title="A steakhouse in Newark, Delaware with wood-fired flavor and a more refined experience"
      intro="When diners search for a steakhouse in Newark, Delaware, they are often looking for quality, consistency, and a setting that feels worth the reservation. Panache Wood Fire Grill should use this page to compete on cuisine-specific intent with a strong focus on wood-fired preparation, premium ingredients, and a polished dining atmosphere."
    >
      <ContentSection title="Why Wood-Fired Makes the Difference">
        <BulletCards
          items={[
            "Steaks cooked over a live wood fire for unmatched depth of flavor",
            "Premium cuts selected for marbling, tenderness, and taste",
            "Seasonal sides and accompaniments that complement the main course",
            "A focused cocktail and wine program built around bold flavors",
            "An atmosphere that feels elevated without being stuffy",
          ]}
        />
      </ContentSection>
      <ContentSection
        title="Beyond the Steak"
        body="While the wood-fired grill is at the heart of the experience, Panache offers a full menu of elevated American dishes, seafood, and seasonal specials that round out the dining experience."
      />
      <ContentSection title="Frequently Asked Questions">
        <FAQ
          items={[
            { q: "What cuts of steak does Panache offer?", a: "The menu features a rotating selection of premium cuts, prepared over a live wood fire." },
            { q: "Is Panache only a steakhouse?", a: "No. While wood-fired steaks are a highlight, the menu also includes seafood, pasta, and seasonal dishes." },
            { q: "Does Panache accommodate dietary restrictions?", a: "Yes. The kitchen can accommodate most dietary needs with advance notice." },
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
