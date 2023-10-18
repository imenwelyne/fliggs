import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";



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

  const alignment = align === "right" ? "align-usp-right" : "";

  return (
<section className="bg-black">
<div className={`container  mx-auto lg:py-8 `}>  
      <div className="lg:flex-col">

      <div className={`flex-col flex justify-start items-center usp-text usp-text-width background-size-80 ${alignment}`} style={{ backgroundImage: `url(${imgUrl})`}}>
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
  console.log(data);
  return (

    <section className="text-gray-100 m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2">
        <h2 className="usp-title-size text-white font-bold">{data.title}</h2>
      </div>
      
        {data.team.map((team: Team, index: number) => (
          <Team key={index} {...team} />
        ))}

    </section>
  );
 
}
