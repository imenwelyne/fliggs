import Link from "next/link";
import HighlightedText from "./HighlightedText";

interface ContentsProps {
  data: {
    title: string;
    content: Content[];
  };
}
 
interface Content {
  id: string;
  title: string;
  description: string;
  align: string;

}

function Content({ title, description, align }: Content) {
 
  const alignment = align === "left" ? "" : "align-usp-right";
  return (
    <div className={`container bg-black  mx-auto lg:py-8 `}>  
    <div className="lg:flex-col">

    <div className={`flex-col justify-start usp-text usp-text-width background-size-80 ${alignment}`} >
      <HighlightedText
        text={title}
        tag="h1"
        className="usp-title-size custom-font-bold leading-none text-white"
      />
      <HighlightedText
            text={description}
            tag="p"
            className="lg:text-lg custom-font-barlow " 
            color="text-violet-400"
          />
    </div>
  </div>
</div>
  );
}

export default function Contents({ data }: ContentsProps) {
  console.log('data',data)
  return (

    <section className="display-content-component text-gray-100 m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-5xl font-bold">{data.title}</h2>
      </div>
      <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.content?.map((content: Content, index: number) => (
          <Content key={index} {...content} />
        ))}
      </div>
    </section>
  );
}
