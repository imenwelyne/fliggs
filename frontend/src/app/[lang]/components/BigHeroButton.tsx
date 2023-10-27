
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import arrow from './arrow-down.png'
import Image from "next/image";


interface BigHeroButtonProps {
  data: {
    id: string;
    title: string;


  };
}

export default function BigHeroButton({ data }: BigHeroButtonProps) {
const test = true;
  return (
<section className="big-hero-height bg-gradient-to-bl from-slate-400 via-neutral-900 to-black ">
<div className={`container flex items-center p-12 mx-auto lg:py-24 `}>
      <div className="lg:flex-col">
   
      <div className=" mb-6 flex flex-col justify-start">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="big-hero-text custom-font-bold leading-none text-white"
        />
      </div>
   
    <div className="read-more">
         <HighlightedText
         //hard text
          text="WHY INVEST"
          tag="p"
          className="read-more-text custom-font-book leading-none text-white mb-8"
        />
          <Image src={arrow} alt="" width={50}></Image>
          </div> 
          <div className="read-more-mobile">
     
          </div> 
         
      </div>
      </div>
</section>
  );
}




