import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";




interface TitleHeroProps {
  data: {
    id: string;
    title: string;
    align: string;
  };
}

export default function TitleHero({ data }: TitleHeroProps) {
  const alignment = data.align === "left" ? "" : "justify-end";

  return (
<section className="bg-black">
<div className={`container flex flex-col justify-start p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between   ${alignment}`}>
      <div className="lg:flex-col hero-title-width">
   
      <div className=" mb-6 flex flex-col justify-start">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="text-4xl custom-font-bold leading-none text-white"
        />

        
      </div>
    </div>
  </div>
</section>




  
  );
}
