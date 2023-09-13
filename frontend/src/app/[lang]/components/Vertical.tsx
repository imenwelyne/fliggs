import HighlightedText from "./HighlightedText";

export default function Vertical({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: string;
}) {
  // Define a CSS class based on the align prop
  const containerClass = align === "left" ? "lg:flex-row" : "lg:flex-row-reverse text-right lower-text-container";

  return (
    <section className="text-gray-100">
      <div className={`container flex flex-col lg:flex ${containerClass} justify-start p-6 mx-auto sm:py-12 lg:py-24 lg:justify-between`}>
        <div className="lg:flex-col lg:max-w-md xl:max-w-lg">
          <div className="pl-9 flex flex-col justify-start">
            <HighlightedText
              text={title}
              tag="h1"
              className="text-5xl font-bold leading-none"
              color="text-violet-400"
            />
            <HighlightedText
              text={description}
              tag="p"
              className="mt-6 mb-8 text-lg sm:mb-12" // Added "mt-6" for top margin
              color="text-violet-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
