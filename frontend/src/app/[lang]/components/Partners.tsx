import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";



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

interface PartnersProps {
  data: {
    title: string;
    description: string;

    partner: Partner[];
  };
}

interface Partner {
  id: string;
 
  image : Picture;
}

function Partner({ image }: Partner) {
  const imgUrl = getStrapiMedia(image.data.attributes.url);


  return (
<section >
<div className="flex items-center justify-center p-6 mt-8 lg:mt-0  ">
<Image
            src={imgUrl || ""}
            alt={
             image.data.attributes.alternativeText || "none provided"
            }
            className="object-contain  hero-image-height "
            width={300}
            height={300}
          />
        </div>
</section>
  );
}

export default function Partners({ data }: PartnersProps) {
  return (
<section className="partners-bg-image text-gray-100" style={{ backgroundColor: "#141414" }}>
    <div className={`flex flex-col container custom-container flex items-center mx-auto lg:py-24`} 
          style={{ paddingLeft: '10px !important' }}>
      <div className="container mx-auto py-4 space-y-2">
        <h2 className="usp-title-size text-white font-bold">{data.title}</h2>
      </div>
      <div className="flex flex-row">

        {data.partner.map((partner: Partner, index: number) => (
          <Partner key={index} {...partner} />
        ))}
        </div>
         <div className="container mx-auto py-4 space-y-2">
         <a href="https://www.prnewswire.com/news-releases/fliggs-mobile-and-t-mobile-launch-an-all-digital-web3-mvno-301942865.html?tc=eml_cleartime" target="_blank">
          <h1 className="text-5xl text-white font-bold">{data.description}</h1>
        </a>      </div>
  </div>
</section>



  );
 
}
