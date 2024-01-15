import { getCookie } from 'cookies-next';
import HeroVideo from "../components/HeroVideo";
import BigHero from "../components/BigHero";
import BigHeroButton from "../components/BigHeroButton";


import Large from "../components/Large";
import LargeBg from "../components/LargeBg";

import Intro from "../components/Intro";
import RightIntro from "../components/RightIntro";
import Display from "../components/Display";

import Space from "../components/Space";

import Hero from "../components/Hero";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import InvestorForm from "../components/InvestorForm";



import Features from "../components/Features";
import InvestorMessageForm from "../components/InvestorMessageForm";

import Teams from "../components/Teams";
import News from "../components/News";
import Numbers from "../components/Numbers";


import Partners from "../components/Partners";
import Infos from "../components/Infos";


import Engagements from "../components/Engagements";
import Grid from "../components/Grid";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Form from "../components/Form";
import YellowForm from "../components/YellowForm";

import DoubleVertical from "../components/DoubleVertical";
import DoubleVerticalNoBg from "../components/DoubleVerticalNoBg";

import SmallHero from "../components/SmallHero";
import NewsElement from "../components/NewsElement";
import NewsDescription from "../components/NewsDescription";
import Usp from "../components/Usp";


import TitleHero from "../components/TitleHero";
import Coverage from "../components/Coverage";




export function sectionRenderer(section: any, index: number) {
  const is5GCookieValue = getCookie('is5G');
  console.log('is5G Cookie Value:', is5GCookieValue, typeof(is5GCookieValue));

  switch (section.__component) {
    case "sections.hero-video":
      return <HeroVideo key={index} data={section} />;
    case "sections.big-hero":
      return <BigHero key={index} data={section} />;
    case "sections.big-hero-button":
      return <BigHeroButton key={index} data={section} />;
    case "sections.small-hero":
      return <SmallHero key={index} data={section} />;
    case "sections.right-intro":
      return <RightIntro key={index} data={section} />;
    case "sections.large-bg":
      return <LargeBg key={index} data={section} />;
    case "sections.display":
      return <Display key={index} data={section} />;
    case "sections.infos":
      return <Infos key={index} data={section} />;
    case "sections.title-hero":
      return <TitleHero key={index} data={section} />;
    case "sections.vertical":
      return <DoubleVertical key={index} data={section} />;
    case "sections.vertical-no-bg":
      return <DoubleVerticalNoBg key={index} data={section} />;
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
    case "sections.grid":
      return <Grid key={index} data={section} />;
    case "sections.map":
      return <Map key={index} data={section} />;
    case "sections.teams":
      return <Teams key={index} data={section} />;
    case "sections.news":
      return <News key={index} data={section} />;
    case "sections.numbers":
      return <Numbers key={index} data={section} />;
    case "sections.partners":
      return <Partners key={index} data={section} />;
    case "sections.engagements":
      return <Engagements key={index} data={section} />;
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
    case "sections.investor-form":
      return <InvestorForm key={index} data={section} />;
    case "sections.investor-message-form":
      return <InvestorMessageForm key={index} data={section} />;
    case "sections.news-element":
      return <NewsElement key={index} data={section} />;
    case "sections.space":
      return <Space key={index}  />;
    case "sections.news-description":
      return <NewsDescription key={index} data={section} />;
    case "sections.coverage":
      if (is5GCookieValue == 'true') {
        return <Coverage key={index} data={section} />;
      } else {
        return null;
      }
    default:
      return null;
  }
}