"use client";
import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import arrow from './arrow-down.png'
import { Fade } from "react-slideshow-image";
interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}
interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}


interface DisplayProps {
  data: {
    id: string;
    title: string;
    files: {
      data: Image[];
    };
  };
}

export default function Display({ data }: DisplayProps) {
// console.log(data);
  return (
    <section className="display-component">
          {/* <div className="slide-container">
      <Fade>
        {data.files.data.map((fadeImage: Image, index) => {
          const imageUrl = getStrapiMedia(fadeImage.attributes.url);
          return (
            <div key={index}>
              {imageUrl && <Image className="w-full h-96 object-cover rounded-lg" height={400} width={600} alt="alt text" src={imageUrl} />}
            </div>
          );
        })}
      </Fade>
    </div> */}
       <div className="display-box-padding display-custom-container flex flex-col justify-center h-screen mx-auto">
    <div className="bg-blackish p-6 lg:flex">
      <div className="flex flex-col justify-center text-center lg:text-left p-5 lg:max-w-md xl:max-w-lg">
        <HighlightedText
          text={data.title}
          tag="h1" 
          className="font-bold leading-none display-title text-white mb-8"
        />
      </div>

    </div>
    <a href="#features-section" target="_self" >

    <div className="read-more">
         <HighlightedText
         //hard text
          text="READ MORE"
          tag="p"
          className="read-more-text custom-font-book leading-none text-white mb-8"
        />
          <Image src={arrow} alt="" width={50}></Image>
          </div> 
          </a>
          <div className="read-more-mobile">
     
          </div> 
         
      </div>
    </section>
  );
}
