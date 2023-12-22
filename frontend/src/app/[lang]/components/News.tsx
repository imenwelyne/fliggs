"use client "
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

interface NewsProps {
  data: {
    title: string;
    new: New[];
  };
}

interface New {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  type: string;
  color: string;
  image : Picture;
}

function New({ id,title, description,date,color,image,url,type }: New) {
  const imgUrl = getStrapiMedia(image.data.attributes.url);
  const descriptionColor = color === 'Dark' ? 'text-white' : 'text-black';
  const boxBackgroundColor = color === 'Yellow' ? 'news-box-background-black' : 'news-box-background-yellow';
  const titleColor = color === 'Yellow' ? 'text-white' : 'text-black';


  console.log('hooo',id,title, description,date,color,image,url,type);
  
  return (

  
<div className={`p-10 custom-news-card news-theme-${color} container  mx-auto lg:py-8 mb-12`}>  
{(type == 'Article') && 
<Link href={`/blog/${id}`}>
<HighlightedText
      text={date}
      tag="h1"
      className={`news-date-size custom-font-bold leading-none news-theme-title-${color} p-4 `} 
      color="#FAFF00"  />
      <div className="flex justify-start news-card-container  news-title-width ">
      <div className="flex-row items-center justify-center mt-8 lg:mt-0  ">
  
    
<Image
            src={imgUrl || ""}
            alt={
             image.data.attributes.alternativeText || "none provided"
            }
            className="object-contain news-image-container px-4"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-col">

 
  <div className={`news-box p-4 mb-4 ${boxBackgroundColor}`}>
    <HighlightedText
      text={title}
      tag="h1"
      className={`text-2xl custom-font-bold leading-none ${titleColor}`}
      color="#FAFF00"
    />
  </div>
  <HighlightedText
      text={description}
      tag="p"
      color="#FAFF00"
      className={`custom-font-barlow leading-none ${descriptionColor}`}
    />
     <div className="container mx-auto py-4 space-y-2">
     {/* //hard text */}
         {/* Conditionally render the link if url is not null */
            url ? (
              <a href={url} target="_blank">
                <h1 className={`custom-font-barlow leading-none font-bold ${descriptionColor}`}>Read more &gt;</h1>
              </a>
            ) : null}   </div>
  </div>
 
 
</div>
</Link>
}
{(type !== 'Article') &&
<div>
<HighlightedText
      text={date}
      tag="h1"
      className={`news-date-size custom-font-bold leading-none news-theme-title-${color} p-4 `} 
      color="#FAFF00"  />
      <div className="flex justify-start news-card-container  news-title-width ">
      <div className="flex-row items-center justify-center mt-8 lg:mt-0  ">
  
    
<Image
            src={imgUrl || ""}
            alt={
             image.data.attributes.alternativeText || "none provided"
            }
            className="object-contain news-image-container px-4"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-col">

 
  <div className={`news-box p-4 mb-4 ${boxBackgroundColor}`}>
    <HighlightedText
      text={title}
      tag="h1"
      className={`text-2xl custom-font-bold leading-none ${titleColor}`}
      color="#FAFF00"
    />
  </div>
  <HighlightedText
      text={description}
      tag="p"
      color="#FAFF00"
      className={`custom-font-barlow leading-none ${descriptionColor}`}
    />
     <div className="container mx-auto py-4 space-y-2">
     {/* //hard text */}
         {/* Conditionally render the link if url is not null */
            url ? (
              <a href={url} target="_blank">
                <h1 className={`custom-font-barlow leading-none font-bold ${descriptionColor}`}>Read more &gt;</h1>
              </a>
            ) : null}   </div>
  </div>
 
 
</div>
</div>
}
  </div>

  );
}

export default function News({ data }: NewsProps) {
  return (

    <section className="news-bg text-gray-100 m:py-12 lg:py-24 p-1">
      
    <div className={`big-hero-height container flex p-12 mx-auto lg:py-24 `}>
      <div className="lg:flex-col">
   
      <div className=" mb-6 flex flex-col justify-start mt-8">
        <HighlightedText
          text={data.title}
          tag="h1"
          color="#FAFF00"
          className="big-hero-text custom-font-bold leading-none text-white mt-16"
        />
      </div>
    </div>
  </div>
      
      {data.new.map((newx: New, index: number) => (
          <New key={index} {...newx} />
        ))}
   
    </section>
  );
 
}