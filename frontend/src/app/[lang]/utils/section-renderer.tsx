import HeroVideo from "../components/HeroVideo";
import BigHero from "../components/BigHero";

import Large from "../components/Large";
import LargeBg from "../components/LargeBg";

import Intro from "../components/Intro";
import RightIntro from "../components/RightIntro";

import Display from "../components/Display";

import Space from "../components/Space";

import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";


import Features from "../components/Features";
import Teams from "../components/Teams";
import News from "../components/News";

import Partners from "../components/Partners";


import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Form from "../components/Form";
import YellowForm from "../components/YellowForm";

import DoubleVertical from "../components/DoubleVertical";
import SmallHero from "../components/SmallHero";
import NewsElement from "../components/NewsElement";
import NewsDescription from "../components/NewsDescription";
import Usp from "../components/Usp";


import TitleHero from "../components/TitleHero";




export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero-video":
      return <HeroVideo key={index} data={section} />;
      case "sections.big-hero":
        return <BigHero key={index} data={section} />;
      case "sections.small-hero":
        return <SmallHero key={index} data={section} />;
        case "sections.right-intro":
        return <RightIntro key={index} data={section} />;
        case "sections.large-bg":
          return <LargeBg key={index} data={section} />;
    
        case "sections.display":
          return <Display key={index} data={section} />;
        case "sections.title-hero":
          return <TitleHero key={index} data={section} />;
      case "sections.vertical":
        return <DoubleVertical key={index} data={section} />;
        case "sections.hero":
          return <Hero key={index} data={section} />;
        case "sections.intro":
        return <Intro key={index} data={section} />;
        case "sections.usp":
          return <Usp key={index} data={section} />;
      case "sections.large":
        return <Large key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
      case "sections.teams":
        return <Teams key={index} data={section} />;
        case "sections.news":
          return <News key={index} data={section} />;
        case "sections.partners":
          return <Partners key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Form key={index} data={section} />;
      case "sections.contact":
      return <ContactForm key={index} data={section} />;
      case "sections.lead-form-yellow":
      return <YellowForm key={index} data={section} />;
      case "sections.news-element":
        return <NewsElement key={index} data={section} />;
        case "sections.space":
          return <Space key={index}  />;
        case "sections.news-description":
          return <NewsDescription key={index} data={section} />;
    default:
      return null;
  }
}



