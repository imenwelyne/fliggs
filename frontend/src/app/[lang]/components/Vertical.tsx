"use client";

import HighlightedText from "./HighlightedText";

export default function Vertical({
  title,
  description,
}: {
  title: string;
  description: string;
 
}) {
 



  return (
    <section className="bg-black text-gray-100" >
      <div className="container flex flex-col lg:flex-row justify-start p-6 mx-auto sm:py-12 lg:py-24 lg:justify-between">
        <div className="lg:flex-col lg:w-1/2 lg:max-w-md xl:max-w-lg ">
        
          <div className=" pl-9 flex flex-col justify-start"> 
            <HighlightedText
              text={title}
              tag="h1"
              className="text-5xl font-bold leading-none"
              color="text-violet-400"
            />
               <HighlightedText
            text={description}
            tag="p"
            className="tmt-6 mb-8 text-lg sm:mb-12"
            color="text-violet-400"
          />
          </div>
        </div>
      </div>
    </section>
    
    
      
      );
}
