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

interface PartnersProps {
  data: {
    title: string;
    description: string;
    
    partner: Partner[];
  };
}

interface Partner {
  id: string;
 link : string;
  image : Picture;
}

function Partner({ image,link }: Partner) {
  const imgUrl = getStrapiMedia(image.data.attributes.url);


  return (
<section className={`mt-8 ${styles.partner}`}>
<div className="flex items-center justify-center px-6 mt-8 lg:mt-0">
<a href={link} target="_blank">
<Image
            src={imgUrl || ""}
            alt={
             image.data.attributes.alternativeText || "none provided"
            }
            className="object-contain "
            width={200}
            height={200}
          />
        </a> 

        </div>
</section>
  );
}

export default function Partners({ data }: PartnersProps) {
  return (
<section className={`text-gray-100 ${styles.partnersBgImage}`} style={{ backgroundColor: "#141414" }}>
    <div className={`flex flex-col container custom-container flex items-center mx-auto lg:py-24`} 
          style={{ paddingLeft: '10px !important' }}>
      <div className="container mx-auto py-4 space-y-2">
        <h2 className={`text-white font-bold ${styles.uspTitleSize}`} >{data.title}</h2>
      </div>
      <div className={`flex flex-row mt-8 ${styles.partnerHeight}`}  >

        {data.partner.map((partner: Partner, index: number) => (
          <Partner key={index} {...partner} />
        ))}
        </div>
         {/* <div className="container mx-auto py-4 space-y-2">
         <a href="https://www.prnewswire.com/news-releases/fliggs-mobile-and-t-mobile-launch-an-all-digital-web3-mvno-301942865.html?tc=eml_cleartime" target="_blank">
          <h1 className="partner-link-size text-white  font-bold">{data.description}</h1>
        </a>      </div> */}
  </div>
</section>



  );
 
}
