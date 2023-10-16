import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";



interface LargeBgProps {
  data: {
    id: string;
    title: string;
    align: string;
  };
}

export default function LargeBg({ data }: LargeBgProps) {
  const alignment = data.align === "left" ? "" : "justify-end";

  return (
<section className="large-bg-image text-gray-100" style={{ backgroundColor: "#faff00" }}>
    <div className={`container custom-container flex items-center mx-auto lg:py-24 ${alignment}`} 
          style={{ paddingLeft: '10px !important' }}>
      <div className="lg:flex-col xl:max-w-lg">
     
      <div className="  flex flex-col justify-start">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="text-6xl custom-font-bold leading-none text-black"
          color="text-violet-400"
        />
      </div>
    </div>
  </div>
</section>




  
  );
}
