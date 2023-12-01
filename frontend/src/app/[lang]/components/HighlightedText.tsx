interface HighlightedTextProps {
  text: string;
  tag: string;
  className?: string;
  color?: string;
}

export default function HighlightedText({
  text,
  tag,
  className,
  color,
}: HighlightedTextProps) {
  const tempText = text.split(/(\[.*?\]|\S+)/);
  let result = [ " " ];

  result.push(`<${tag} class="${className ? className : ""}">`);

  tempText.forEach((word: string, index: number) => {
    if (word.includes("[") && word.includes("]")) {
      const highlight = word.substring(1, word.length - 1) ;
      result.push(
        ` <span key=${index} style="background-color: ${
          color ? color : ""
        }; color: black; padding-left: 5px"> ${highlight} </span> `
      );
    } else result.push(" " + word + " ");
  });

  result.push(`</${tag}>`);

  return <div dangerouslySetInnerHTML={{ __html: result.join("") }} />;
}
