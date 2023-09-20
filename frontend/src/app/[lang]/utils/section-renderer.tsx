import Hero from "../components/Hero";
import Large from "../components/Large";

import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Form from "../components/Form";
import DoubleVertical from "../components/DoubleVertical";
import SmallHero from "../components/SmallHero";


export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
      case "sections.small-hero":
        return <SmallHero key={index} data={section} />;
      case "sections.vertical":
        return <DoubleVertical key={index} data={section} />;
      case "sections.large":
        return <Large key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Form key={index} data={section} />;
    default:
      return null;
  }
}
