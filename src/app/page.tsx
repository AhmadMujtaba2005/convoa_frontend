import HomePageTemplate from "@/components/templates/HomePageTemplate";
import { heroContent, homeCards, homeTrustedBy, homesolutions, integrationCategories, steps, homefocus, homeindustries, ctaSection } from "@/features/home";

export default function Page() {
  return (
    <main>
      <HomePageTemplate 
        hero={heroContent}
        cards={homeCards}
        trustedBy={homeTrustedBy}
        solutions={homesolutions}
        integrations={integrationCategories}
        steps={steps}
        focus={homefocus}
        industries={homeindustries}
        cta={ctaSection}
      />
    </main>
  );
}

