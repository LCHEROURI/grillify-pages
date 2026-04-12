import PageShell from "@/components/PageShell";
import ContentSection from "@/components/ContentSection";
import BulletCards from "@/components/BulletCards";
import FAQ from "@/components/FAQ";

export default function BestRestaurantBlueBellPA() {
  return (
    <PageShell
      eyebrow="Best Restaurant in Blue Bell, PA"
      title="Why Panache Wood Fire Grill belongs in the conversation for the best restaurant in Blue Bell, PA"
      intro="Panache Wood Fire Grill offers the kind of dining experience people are searching for when they want more than an ordinary meal in Blue Bell, Pennsylvania. With wood-fired flavor, elevated American cuisine, a polished setting, live music, and service built around the guest experience, Panache is positioned for date nights, celebrations, business dinners, and memorable evenings out."
    >
      <ContentSection title="What Makes a Restaurant the Best?">
        <BulletCards
          items={[
            "Wood-fired cooking that adds depth and character to every dish",
            "A menu designed around seasonal ingredients and elevated American cuisine",
            "Warm, vibrant ambiance with live music Thursday through Saturday",
            "Attentive service that anticipates what guests need",
            "A cocktail and wine program curated to complement the food",
            "Outdoor patio dining with cozy fire pits",
            "Private dining and event options for groups of all sizes",
          ]}
        />
      </ContentSection>
      <ContentSection
        title="More Than a Meal"
        body="Panache is built for the moments that matter. Whether you are celebrating an anniversary, hosting a client dinner, or simply looking for a restaurant that feels like an occasion, the experience at Panache is designed to deliver. From wood-fired pizzas to fresh seafood and handcrafted pastas, there is something for everyone."
      />
      <ContentSection title="Frequently Asked Questions">
        <FAQ
          items={[
            { q: "What type of cuisine does Panache serve?", a: "Panache specializes in wood-fired American and Italian cuisine including pizzas, seafood, pastas, steaks, and seasonal dishes — all prepared over a live wood fire." },
            { q: "Is Panache good for special occasions?", a: "Yes. The setting, live music, service, and menu are designed to make celebrations, date nights, and milestones feel memorable." },
            { q: "Do I need a reservation?", a: "Reservations are recommended, especially on weekends. You can reserve through OpenTable." },
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
