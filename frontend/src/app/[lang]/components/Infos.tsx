import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
import styles from "../styles/partner.module.css"


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

interface InfosProps {
  data: {
    title: string;
    description: string;
    urlTitle: string;
    url: string;
    info: Info[];
  };
}

interface Info {
  id: string;
 title : string;
  image : Picture;
  align : string;
}

function Info({title, image,align}: Info) {

  const imgUrl = getStrapiMedia(image.data.attributes.url);

  const containerClass = align === "left" ? "" : "lg:flex-row-reverse align-items-left";
 const bgAlignment = align === "left" ? "infos-text" : "infos-text-right";
  return (
    <section className="text-gray-100 ">
      <div className={`container flex flex-col lg:flex   justify-start mx-auto lg:justify-between`}>
        <div className="lg:flex-col Numbtext">
        <div className={`flex flex-col justify-start ${containerClass}`}>
          <div className={`flex-col justify-start ${bgAlignment} vertical-width `} style={{ backgroundImage: `url(${imgUrl})`}}>
            <HighlightedText
              text={title}
              tag="h1"
              className="text-4xl custom-font-bold text-black  leading-none"
              color="text-violet-400"
            />
       
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Infos({ data }: InfosProps) {
  return (
<section className={`text-gray-100 bg-yellow lg:p-24 p-12`} >
<div className="mb-5 flex flex-col space-y-4 text-left">
        <h1 className="text-4xl text-black custom-font-bold leading-none">{data.title}</h1>
        <p className="lg:text-lg text-black  custom-font-barlow">{data.description}</p>
      </div>
      

        {data.info.map((info: Info, index: number) => (
          <Info key={index} {...info} />
        ))}
        <div className="mb-5 flex flex-col space-y-4 text-left">
        <a href={data.url} target="_blank">
        <p className="lg:text-lg text-black  custom-font-barlow">{data.urlTitle}</p>
        </a>
      </div>

</section>



  );
 
}
