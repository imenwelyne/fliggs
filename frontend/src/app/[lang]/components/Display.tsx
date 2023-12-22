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
import { useEffect, useState } from "react";
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
    textButton: string;
    id: string;
    title: string;
    smallTitle: string;
    linkText: string;
    activeBackground:any;
    dispicture : Dispicture[]
  };
}


export default function Display({ data }: DisplayProps) {
  const [isInvest, setInvest] = useState(false)
  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('investors')) {
      setInvest(true);
    }
  }, []);

  return (
    <section className={`slider-container ${isInvest ? 'gradient-bg' : ''}`}>
      <div className={`${isInvest ? 'dnone' : ''}`}>
       <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showArrows={false} showStatus={false}>
       {data.dispicture.map((item,index) => {
         const imageUrl = getStrapiMedia(item.image.data.attributes.url);
         return (
           <div key={index} className="image-slider ">
             
             {imageUrl &&  <img  className="w-full display-image-size h-100 object-cover rounded-lg" alt= {item.image.data.attributes.alternativeText || "none provided"} src={imageUrl} />}
             
            
             </div>
           
         );
       })}
       </Carousel>
       </div>
    
        <div className=" flat display-box-padding display-custom-container flex flex-col justify-center h-screen mx-auto">
    <div className={` ${data.activeBackground == "true" ? 'bg-blackish' : ''} bg-blackish-margin p-6 flex`}>
      <div className="flex flex-col justify-center text-center lg:text-left p-5 lg:max-w-md xl:max-w-lg">
       { (data.smallTitle) && <HighlightedText
          text={data.smallTitle}
          tag="h1" 
          className="custom-font-bold text-2xl leading-none display-small-title text-white mb-8"
          color="#FAFF00"
        />}
       
        {(data.linkText) && 
        <li className="flex">
        <Link
          href="#registration-section"
          className={` px-4 custom-font-book font-spacing py-2 uppercase  button-bg-yellow text-black }`}
        >
          {data.linkText}
        </Link>
      </li>
        }
          
        <HighlightedText
          text={data.title}
          tag="h1" 
          className={`${isInvest ? 'custom-font-bold heroTitleInvest leading-none display-title text-white py-4' : 'custom-font-bold heroTitle leading-none display-title text-white py-4'}`}
          color="#FAFF00"
        />
      </div>

    </div>
    {(data.textButton) && 
    <a href="#right-intro-section" target="_self" >

    <div className="read-more mb-8">
         <HighlightedText
          text={data.textButton}
          tag="p"
          color="#FAFF00"
          className="read-more-text custom-font-book leading-none text-white mb-8"
        />
          <Image className="arrow" src={arrow} alt="" ></Image>
          </div> 
          </a>
    }
    
          <div className="read-more-mobile">
     
          </div> 
         
               </div>
    </section>
  );
}