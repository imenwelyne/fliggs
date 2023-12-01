import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { ReactNode } from "react";
interface NumbersProps {
  data: {
    title: string;
 
    number: Number[];


  };
}

interface Number {
  id: string;
  title: string;
  description: string;
  image: Picture;
  align: string;

}
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
function Number({ title, description,image,align }: Number) {
    
  const imgUrl = getStrapiMedia(image.data.attributes.url);
  const containerClass = align === "left" ? "" : "lg:flex-row-reverse align-items-left";
 const bgAlignment = align === "left" ? "numbers-text" : "numbers-text-right";
  return (
    <section className="text-gray-100 ">
      <div className={`container flex flex-col lg:flex   justify-start mx-auto lg:justify-between`}>
        <div className="lg:flex-col Numbtext">
        <div className={`flex flex-col justify-start ${containerClass}`}>
          <div className={`flex-col justify-start ${bgAlignment} vertical-width  background-size-80 `} style={{ backgroundImage: `url(${imgUrl})`}}>
            <HighlightedText
              text={title}
              tag="h1"
              className="text-4xl custom-font-bold leading-none"
              color="#FAFF00"
            />
            <HighlightedText
              text={description}
              tag="p"
              className="numbtext mt-6 mb-8 custom-font-barlow  sm:mb-12" 
              color="#FAFF00"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Numbers({ data }: NumbersProps) {
console.log('aaa',data.number);

  return (

    <section id="numbers-section"  className={`bg-gray lg:p-24 p-12`} >
      {(data.title) && 
      <HighlightedText
      text={data.title}
      tag="p"
      className="feature-title-size py-4 custom-font-bold leading-none text-white mb-16 numTitle"
      color="#FAFF00"
    />
      }
        {data.number.map((number: Number, index: number) => (
          <Number key={index} {...number} />
        ))}

    </section>
  );
 
}
