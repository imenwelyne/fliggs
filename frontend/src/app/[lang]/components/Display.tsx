"use client";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import arrow from './arrow.svg'
import { Carousel } from 'react-responsive-carousel';
import { Fade } from "react-slideshow-image";
interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
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

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Dispicture {
  id: string;
  image : Picture;
}

interface DisplayProps {
  data: {
    id: string;
    title: string;
   dispicture : Dispicture[]
  };
}
function Dispicture({ image }: Dispicture) {
  const imgUrl = getStrapiMedia(image.data.attributes.url);


  return (
<section >
<div className="flex items-center justify-center p-6 mt-8 lg:mt-0  ">
<Image
            src={imgUrl || ""}
            alt={
             image.data.attributes.alternativeText || "none provided"
            }
            className="object-contain "
            width={300}
            height={300}
          />
        </div>
</section>
  );
}

export default function Display({ data }: DisplayProps) {
  console.log(data);
  return (
    <section className="slider-container">
      
          <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showArrows={false} showStatus={false}>
        {data.dispicture.map((item,index) => {
          const imageUrl = getStrapiMedia(item.image.data.attributes.url);
          return (
            <div key={index} className="image-slider">
              
              {imageUrl && <Image className="w-full h-100 object-cover rounded-lg" height={1000} width={600} alt="alt text" src={imageUrl} />}
             
              </div>
            
          );
        })}
        </Carousel>
    
        <div className=" flat display-box-padding display-custom-container flex flex-col justify-center h-screen mx-auto">
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
          text="READ MORE"
          tag="p"
          className="read-more-text custom-font-book leading-none text-white mb-8"
        />
          <Image className="arrow" src={arrow} alt="" ></Image>
          </div> 
          </a>
          <div className="read-more-mobile">
     
          </div> 
         
               </div>
    </section>
  );
}
