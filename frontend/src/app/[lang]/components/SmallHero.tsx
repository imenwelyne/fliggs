import Image from "next/image";
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

interface SmallHeroProps {
  data: {
    id: string;
    title: string;
    picture: Picture;
    align: string;
  };
}

export default function SmallHero({ data }: SmallHeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
  const alignment = data.align === "left" ? "" : "justify-end";

  return (
<section className="bg-gradient-to-bl from-slate-400 via-neutral-900 to-black">
<div className={`container flex items-center p-12 mx-auto lg:py-24 ${alignment}`}>
      <div className="lg:flex-col">
      <div className="mb-4 lg:max-w-md ">
        <Image
          src={imgUrl || ""}
          alt={
            data.picture.data.attributes.alternativeText || "none provided"
          }
          className=""
          width={400}
          height={400}
        />
      </div>
      <div className=" mb-6 flex flex-col justify-start">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="text-4xl font-bold leading-none text-white"
        />
      </div>
    </div>
  </div>
</section>




  
  );
}
