import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";



interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface UspProps {
  data: {
    id: string;
    title: string;
    picture: Picture;
    align: string;
    description : string
  };
}

export default function Usp({ data }: UspProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
  const alignment = data.align === "left" ? "" : "align-usp-right";
  return (
<section className="bg-black">
<div className={`container  mx-auto lg:py-8 `}>  
      <div className="lg:flex-col">

      <div className={`flex-col justify-start usp-text usp-text-width background-size-80 ${alignment}`} style={{ backgroundImage: `url(${imgUrl})`}}>
        <HighlightedText
          text={data.title}
          tag="h1"
          className="usp-title-size custom-font-bold leading-none text-white"
        />
        <HighlightedText
              text={data.description}
              tag="p"
              className="lg:text-lg custom-font-barlow " 
              color="text-violet-400"
            />
      </div>
    </div>
  </div>
</section>




  
  );
}
