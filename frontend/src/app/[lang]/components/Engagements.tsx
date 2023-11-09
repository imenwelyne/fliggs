import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
import React from "react";
import { url } from "inspector";



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

interface EngagementsProps {
  data: {
    title: string;

    engagement: Engagement[];
  };
}

interface Engagement {
  id: string;
 label : string;
 url : string;
  image : Picture;
}

function Engagement({ image,url,label }: Engagement) {
  const imgUrl = getStrapiMedia(image.data.attributes.url);


  return (
<section >
<div className="flex items-center justify-center lg:p-16 p-4 mt-8 lg:mt-0  ">
<a href={`${url}`}   target="_blank" title={label}>

<Image
            src={imgUrl || ""}
            alt={
             image.data.attributes.alternativeText || "none provided"
            }
            className="object-contain"
            width={70}
            height={70}
          />
           </a> 
        </div>
</section>
  );
}

export default function Engagements({ data }: EngagementsProps) {
  return (
<section className="engagements-bg-image  text-gray-100">
    <div className={`flex flex-col container custom-container flex items-center mx-auto `} 
          style={{
            paddingLeft: '10px',
            alignItems: 'start',
          }}>
      <div className="container mx-auto py-4 px-4 space-y-2">
        <h2 className="engagement-title-size padding-engagement text-white custom-font-bold">{data.title}</h2>
      </div>
      <div className="engagements-height flex justify-start flex-row">

        {data.engagement.map((engagement: Engagement, index: number) => (
          <Engagement key={index} {...engagement} />
        ))}
        </div>
  </div>
</section>



  );
 
}
