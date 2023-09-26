import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";




interface NewsDescriptionProps {
  data: {
    id: string;
    description: string;

    align: string;
  };
}

export default function NewsDescription({ data }: NewsDescriptionProps) {
  const alignment = data.align === "left" ? "" : "justify-end";

  return (
<section className="bg-black">
<div className={`container flex flex-col justify-start p-6 mx-auto  lg:flex-row lg:justify-between lg:hero-title-width  ${alignment}`}>
      <div className="lg:flex-col">
   
      <div className="flex flex-col justify-start">
   

<HighlightedText
              text={data.description}
              tag="p"
              className="mb-4  lg:text-lg" // Added "mt-6" for top margin
              color="text-violet-400"
            />
      </div>
    </div>
  </div>
</section>




  
  );
}
