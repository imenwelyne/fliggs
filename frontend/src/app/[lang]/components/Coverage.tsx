import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";

interface CoverageProps {
  data: {
    id: string;
    text: string;
  };
}

export default function Coverage({ data }: CoverageProps) {
  return (
<section className="bg-black">
<div className={`container flex flex-col justify-start p-6 mx-auto  lg:flex-row lg:justify-between lg:hero-title-width`}>
      <div className="lg:flex-col" style={{width: "650px", height:"400px", display:"flex", justifyContent:'center'}}>
     
    </div>
  </div>
</section>

  
  );
}
