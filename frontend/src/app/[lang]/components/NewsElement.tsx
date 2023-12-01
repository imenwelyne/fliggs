import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";




interface NewsElementProps {
  data: {
    id: string;
    title: string;
    description: string;
    align: string;
  };
}

export default function NewsElement({ data }: NewsElementProps) {
  const alignment = data.align === "left" ? "" : "justify-end";

  return (
<section className="bg-black">
<div className={`container flex flex-col justify-start p-6 mx-auto lg:flex-row lg:justify-between  ${alignment}`}>
      <div className="lg:flex-col">
   
      <div className="flex flex-col justify-start">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="text-1xl custom-font-barlow-semibold leading-none text-white"
          color="#FAFF00"
        />

<HighlightedText
              text={data.description}
              tag="p"
              className="custom-font-barlow " // Added "mt-6" for top margin
              color="#FAFF00"
            />
      </div>
    </div>
  </div>
</section>




  
  );
}
