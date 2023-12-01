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

interface HeroVideoProps {
  data: {
    id: string;
    title: string;
    picture: Picture;
    buttons: Button[];
    videoOnMobile: string;

  };
}

export default function HeroVideo({ data }: HeroVideoProps) {
  const vidUrl = getStrapiMedia(data.picture.data.attributes.url);
const test = true;
  return (
    <section>
    <div className={data.videoOnMobile === "true" ? "video-background-mobile-true" : "video-background"}>
        {vidUrl !== null ? (
          <video autoPlay loop muted className="video-element">
            <source src={vidUrl} type="video/mp4" />
          </video>
        ) : (
          // Handle the case when vidUrl is null
          <p>Video URL is null</p>
        )}
  


<div className={`container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ${data.videoOnMobile === "true" ? 'content-mobile-true' : 'content'}`}>
            <div className="flex flex-col justify-center  rounded-lg custom-width-hero-text lg:text-left text-white ">
            <HighlightedText
              text={data.title}
              tag="h1"
              className={`text-${data.videoOnMobile === "true" ? '2xl' : '5xl'} custom-font-bold leading-none sm:text-6xl mb-8`}              
              color="#FAFF00"
            />
            {/* Add any additional text content here */}
          </div>
        </div>
      </div>
    </section>
  );
}




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