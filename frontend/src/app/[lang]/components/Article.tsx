"use client"
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import styles from "../styles/article.module.css"
import { useEffect, useState } from "react";
import JustifiedContent from "./justifiedContent";
import NewsElement from "./NewsElement";
interface Article {
  data: {
    attributes: any;
  };
}

function formatDate(inputDate:any) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateObject = new Date(inputDate);
  const formattedString = dateObject.toLocaleDateString('en-US', options as any);

  const day = dateObject.getDate();
  const suffix = getDaySuffix(day);
  const formattedWithSuffix = formattedString.replace(/\d{1,2}/, day + suffix);

  return formattedWithSuffix;
}
const addMailTo = (paragraph:string) => {
  if (paragraph.includes('@')) {
    // Assuming the first occurrence of '@' is part of an email address
    const [emailUser, domain] = paragraph.split('@');
    const mailtoLink = `mailto:${emailUser}@${domain}`;
    return (
      <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
        {paragraph}
      </a>
    );
  } else {
    return <>{paragraph.replace(/\n/gi, "\n")}</>;
  }
};
function getDaySuffix(day:any) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
export default function Article({ data }: Article) {
  const [date, setDate] = useState('');
  console.log('rec',data);
  useEffect(() => {
    if (data) {
      const formattedDate = formatDate(data.attributes.date);
      setDate(formattedDate);
    }
  }, [data]);
console.log('content',typeof(data.attributes.content));
  return (
<section className="bg-black">
  {data.attributes && 
  <div className={`${styles.articleCont} mx-auto mt-24`}>
  <h1 className={`font-bold leading-none ${styles.articleTitle}`}>{data.attributes.title}</h1>
  <p className={styles.articleSubTtitle}>- {data.attributes.subtitle}</p>
  {data.attributes.images.data.map((item:any)=>{
   const imageUrl = getStrapiMedia(`${item.attributes.url}`);
   return (
        <img
          key={item.id} 
          src={imageUrl || ""}
          alt={""}
          className={styles.imagePost}
        />
      );

  })}
  <p className={styles.bold}>{data.attributes.place} - {date}</p>
  {data.attributes.content &&
  data.attributes.content.map((item: any) => (
    <div key={item.id}>
      {item.title && <h2 className={styles.bold}>{item.title}</h2>}
      <JustifiedContent content={item.content}></JustifiedContent>
    </div>
  ))}
  {data.attributes.contact &&
  <div>
    <h2 className={styles.bold}>Contact Media</h2>
    <p className={styles.justifiedParagraph}>{addMailTo(data.attributes.contact)}</p>
  </div>
  }
</div>}
</section>
  );
}
