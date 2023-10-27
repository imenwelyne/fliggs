"use client"
import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { useState } from "react";



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

interface TeamsProps {
  data: {
    title: string;
    team: Team[];
  };
}

interface Team {
  id: string;
  name: string;
  position: string;
  align: string;
  image : Picture;
}

function Team({ name, position,align,image }: Team) {
  const imgUrl = getStrapiMedia(image.data.attributes.url);
  const [crono,setCrono] = useState(0);
  const [space,setSpace] = useState(false);
  const alignment = align === "right" ? "align-usp-right" : "";

  return (
<section className="team-section bg-black">
  <div className={`container  mx-auto lg:py-8 `}>  
    <div className="lg:flex-col">
      <div className={`flex-col flex justify-start items-center usp-text usp-text-width background-size-80 `} style={{  backgroundImage: `url(${imgUrl})`}}>
        <div className="yellow-box p-4">
          <HighlightedText
            text={name}
            tag="h1"
            className="3xl custom-font-bold leading-none text-black"
          />
        </div>
        <div className="gray-box p-4">
          <HighlightedText
            text={position}
            tag="p"
            className="lg:text-lg custom-font-barlow text-black"
            color="text-violet-400"
          />
        </div>
      </div>

    </div>
  </div>
</section>
  );
}

export default function Teams({ data }: TeamsProps) {
  return (

    <section className="text-gray-100 m:py-12 lg:py-24 overflow-hidden" >
      <div className="container mx-auto py-4 ">
        <h2 className="usp-title-size text-white font-bold">{data.title}</h2>
      </div>
      <div className="team-container">
        {data.team.map((team: Team, index: number) => (
          <div className="member-container" style={{marginLeft: index === 2 || index === 6 || index === 10 ? '200px' : '0'}}>
            <Team key={index} {...team} />
          </div>
        ))}
      </div>
    </section>
  );
 
}
