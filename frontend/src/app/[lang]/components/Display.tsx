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


interface DisplayProps {
  data: {
    id: string;
    title: string;
 
  };
}

export default function Display({ data }: DisplayProps) {

  return (
    <section className="display-component">
       <div className="display-custom-container flex flex-col justify-center h-screen mx-auto">
    <div className="bg-blackish p-6 rounded-lg lg:flex">
      <div className="flex flex-col justify-center text-center lg:text-left  lg:max-w-md xl:max-w-lg">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="font-bold leading-none hero-text text-white mb-8"
        />
      </div>
    </div>

        
          {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link
                key={1}
                href={"x"}
                target={ "_self"}
                className={renderButtonStyle("")}
              >
                {"Read more"}
              </Link>
          </div>
     */}
      </div>
    </section>
  );
}
