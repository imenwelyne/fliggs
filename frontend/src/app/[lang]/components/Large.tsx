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

interface LargeProps {
  data: {
    id: string;
    title: string;
    picture: Picture;
    align: string;
  };
}

export default function Large({ data }: LargeProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
  const alignment = data.align === "left" ? "" : "justify-end";

  return (
<section className="bg-black text-gray-100" style={{ background: "#faff00" }}>
<div className={`container flex items-center p-12 mx-auto lg:py-24 ${alignment}`}>
      <div className="lg:flex-col xl:max-w-lg">
      <div className="lg:max-w-md xl:max-w-lg mb-6">
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
          className="text-4xl custom-font-bold leading-none text-black"
          color="text-violet-400"
        />
      </div>
    </div>
  </div>
</section>




  
  );
}
