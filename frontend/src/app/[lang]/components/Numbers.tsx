import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
interface NumbersProps {
  data: {
 
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

  return (
    <section className="text-gray-100 ">
      <div className={`container flex flex-col lg:flex   justify-start p-6 mx-auto lg:justify-between`}>
        <div className="lg:flex-col">
        <div className={`flex flex-col justify-start ${containerClass}`}>
          <div className={`flex-col justify-start numbers-text vertical-width  background-size-80 `} style={{ backgroundImage: `url(${imgUrl})`}}>
            <HighlightedText
              text={title}
              tag="h1"
              className="text-4xl custom-font-bold leading-none"
              color="text-violet-400"
            />
            <HighlightedText
              text={description}
              tag="p"
              className="mt-6 mb-8 custom-font-barlow lg:text-lg sm:mb-12" 
              color="text-violet-400"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Numbers({ data }: NumbersProps) {

  return (

    <section  className={`bg-gray p-8`} >
        {data.number.map((number: Number, index: number) => (
          <Number key={index} {...number} />
        ))}

    </section>
  );
 
}
