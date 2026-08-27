import HomePageTemplate from "@/features/home-page/HomePage";
import { heroContent, homeCards, homeTrustedBy, homesolutions, integrationCategories, steps, homefocus, homeindustries, ctaSection } from "@/features/home-page/home";

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

