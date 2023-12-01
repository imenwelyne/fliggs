
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import arrow from './arrow-down.png'
import Image from "next/image";


interface BigHeroButtonProps {
  data: {
    id: string;
    title: string;
    description: string;



  };
}

export default function BigHeroButton({ data }: BigHeroButtonProps) {
const test = true;
  return (
<section className="big-hero-height ">
<div className={`container flex items-center p-12 mx-auto lg:py-24 `}>
      <div className="lg:flex-col">
   
      <div className=" mb-6 flex flex-col justify-start">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="big-hero-text custom-font-bold leading-none text-white"
          color="#FAFF00"
        />
          {/* <HighlightedText
              text={data.description}
              tag="p"
              className="custom-font-barlow py-4 " 
              color="text-violet-400"
            /> */}
      </div>
      <a href="#numbers-section" target="_self" >

    <div className="read-more">
         <HighlightedText
         //hard text
          text="WHY INVEST"
          tag="p"
          className="read-more-text custom-font-book leading-none text-white mb-8"
          color="#FAFF00"
        />
        
          <Image src={arrow} alt="" width={50}></Image>
          </div> 
          </a>
          <div className="read-more-mobile">
     
          </div> 
         
      </div>
      </div>
</section>
  );
}