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
  };
}

export default function Large({ data }: LargeProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
<section className="bg-black text-gray-100" style={{ background: "yellow" }}>
  <div className="container flex items-center p-12 mx-auto lg:py-24"> {/* Increased padding */}
    <div className="lg:flex-col xl:max-w-lg">
      <div className="lg:max-w-md xl:max-w-lg">
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
      <div className="pl-4 flex flex-col justify-start">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="text-4xl font-bold leading-none text-black"
          color="text-violet-400"
        />
      </div>
    </div>
  </div>
</section>




  
  );
}
