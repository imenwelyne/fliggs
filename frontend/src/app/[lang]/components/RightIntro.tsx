import Link from "next/link";
import Image from "next/image";

import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
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

interface RightIntroProps {
  data: {
    id: string;
    title: string;
    description: string;

    picture: Picture;
    buttons: Button[];
  };
}

export default function RightIntro({ data }: RightIntroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
<section id="right-intro-section" className="bg-blackish  intro-position">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
  
        <div className="flex flex-col justify-center p-6  rounded-lg large-bg-text-width  lg:text-left">
          <HighlightedText
            text={data.title}
            tag="h1"
            className="text-4xl custom-font-bold leading-none sm:text-4xl mb-8"
            color="text-violet-400"
          />
 <HighlightedText
              text={data.description}
              tag="p"
              className="custom-font-barlow " 
              color="text-violet-400"
            />
            <div className="flex items-center justify-center object-contain   image-right-intro ">

            <video autoPlay loop muted className="video-border" style={{ height: '500px' }}>
        <source src={imgUrl || ""} />
      </video>
          {/* <Video
            src={imgUrl || ""}
            alt={
              data.picture.data.attributes.alternativeText || "none provided"
            }
            className="object-contain   image-right-intro "
            width={600}
            height={600}
          /> */}
        </div>
          {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div> */}
        </div>
  
      </div>
    </section>
  );
}
