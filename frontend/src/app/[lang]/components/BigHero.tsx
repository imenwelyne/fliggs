
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";


interface BigHeroProps {
  data: {
    id: string;
    title: string;


  };
}

export default function BigHero({ data }: BigHeroProps) {
const test = true;
  return (
<section className="big-hero-height hero-bg ">
<div className={`container flex lg:items-center p-12 mx-auto lg:py-24 `}>
      <div className="lg:flex-col">
   
      <div className=" mb-6 flex flex-col justify-start">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="big-hero-text custom-font-bold leading-none text-white"
          color="#FAFF00"
        />
      </div>
    </div>
  </div>
</section>
  );
}