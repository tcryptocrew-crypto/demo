import { createFileRoute } from "@tanstack/react-router";
import { IntroLoader } from "@/components/site/IntroLoader";
import { MobileStickyBar, Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Philosophy, ProofMoment, SignatureUsp } from "@/components/site/Statements";
import { ScaleEffect } from "@/components/site/ScaleEffect";
import { GrowthSystem } from "@/components/site/GrowthSystem";
import { Services } from "@/components/site/Services";
import { CaseStudies } from "@/components/site/CaseStudies";
import { About, BrandAuthority, SocialProof } from "@/components/site/Authority";
import { Process, Testimonials } from "@/components/site/Process";
import { Audit } from "@/components/site/Audit";
import { FinalCta, Footer } from "@/components/site/Closing";

const TITLE = "Hancel Villatoro — Marketing Expert & Brand Growth Strategist";
const DESCRIPTION =
  "Hancel Villatoro is a marketing expert and entrepreneur who scales brands through positioning, content and acquisition. 37.3K+ followers, 450+ client completions. Free marketing audit.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "marketing expert, marketing consultant, brand growth strategist, digital marketing consultant, brand scaling consultant, personal brand marketing",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Hancel Villatoro",
              jobTitle: "Marketing Expert",
              description:
                "Entrepreneur and marketing expert focused on helping brands scale through smarter marketing.",
              sameAs: ["https://instagram.com/viphancel"],
              knowsAbout: [
                "Brand Strategy",
                "Content & Social Growth",
                "Paid Acquisition",
                "Conversion Strategy",
                "Marketing Systems",
              ],
            },
            {
              "@type": "ProfessionalService",
              name: "Hancel Villatoro — Brand Growth Consulting",
              description: DESCRIPTION,
              serviceType: "Marketing consulting",
              areaServed: "Worldwide",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <IntroLoader />
      <Nav />
      <main>
        <Hero />
        <SignatureUsp />
        <ProofMoment />
        <GrowthSystem />
        <ScaleEffect />
        <Services />
        <CaseStudies />
        <BrandAuthority />
        <SocialProof />
        <Philosophy />
        <About />
        <Process />
        <Testimonials />
        <Audit />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
