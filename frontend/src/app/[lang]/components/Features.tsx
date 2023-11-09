import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
interface FeaturesProps {
  data: {
    title: string;
    feature: Feature[];
    picture: Picture;

  };
}

interface Feature {
  id: string;
  title: string;
  description: string;
  align: string;

}
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
function Feature({ title, description,align }: Feature) {

  const alignment = align === "left" ? "" : "align-usp-right align-items-left";

  return (
    <div className={`container mx-auto `}>  
    <div className="lg:flex-col">

    <div className={`flex-col  justify-start usp-text-feature usp-text-width background-size-80 ${alignment}`} >
      <HighlightedText
        text={title}
        tag="h1"
        className="feature-title-size py-4 custom-font-bold leading-none text-white"
      />
      <HighlightedText
            text={description}
            tag="p"
            className="custom-font-barlow " 
            color="text-violet-400"
          />
    </div>
  </div>
</div>
  );
}

export default function Features({ data }: FeaturesProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (

    <section style={{ backgroundImage: `url(${imgUrl})`}} className={`display-content-component text-gray-100 m:py-12 py-24`} >
      <div className="container mx-auto py-4 space-y-2">
        <h2 className="feature-title-padding feature-font-size text-black custom-font-bold">{data.title}</h2>
      </div>
      <div className="container bg-blackish mx-auto my-6 justify-center lg:p-10 features-margins">
        {data.feature.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
 
}
