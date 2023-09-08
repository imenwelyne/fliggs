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
  <div className="container flex flex-col lg:flex-row justify-start p-6 mx-auto sm:py-12 lg:py-24 lg:justify-between">
    <div className="lg:flex-col lg:w-1/2 lg:max-w-md xl:max-w-lg ">
      <div className="pl-6 lg:max-w-md xl:max-w-lg">
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
      <div className=" pl-9 flex flex-col justify-start"> {/* Added pl-8 for left padding */}
        <HighlightedText
          text={data.title}
          tag="h1"
          className="text-5xl font-bold leading-none text-black"
          color="text-violet-400"
        />
      </div>
    </div>
  </div>
</section>


  
  );
}
