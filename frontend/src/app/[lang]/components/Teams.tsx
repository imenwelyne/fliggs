"use client"
import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { useState } from "react";
import styles from '../styles/teams.module.css'


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

interface TeamsProps {
  data: {
    title: string;
    team: Team[];
  };
}

interface Team {
  id: string;
  name: string;
  key: number;
  position: string;
  image : Picture;
}

function Team({ name, position,image,key }: Team) {
  const imgUrl = getStrapiMedia(image.data.attributes.url);
  const [current,setCruent] = useState(0);


  return (
<section className="team-section bg-black mb-5 mt-5">
  <div className={`mx-auto lg:py-8 ${styles.container}`}>  
    <div className="lg:flex-col"
     style={{ float: key % 2 === 0 ? 'right' : 'none' }}
     >
      <div className={`flex-col flex justify-start items-center usp-text usp-text-width`} style={{  backgroundImage: `url(${imgUrl})`}}>
        <div className={`px-4 py-3 ${styles.yellowBox}`}>
          <HighlightedText
            text={name}
            tag="h1"
            className={`3xl custom-font-bold leading-none text-black ${styles.name}`}
            color="#FAFF00"
          />
        </div>
        <div className={`px-4 py-3 ${styles.grayBox}`}>
          <HighlightedText
            text={position}
            tag="p"
            className={`custom-font-barlow text-black ${styles.position}`}
            color="#FAFF00"
          />
        </div>
      </div>

    </div>
  </div>
</section>
  );
}

export default function Teams({ data }: TeamsProps) {
  return (

    <section className="text-gray-100 m:py-12 lg:py-24 overflow-hidden" >
      <div className="container mx-auto py-4 ">
        <h2 className={`text-white custom-font-bold ${styles.uspTitleSize}`}>{data.title}</h2>
      </div>
      <div className={styles.teamContainer}>
        {data.team.map((team: Team, index: number) => (
          <div className={`${styles.memberContainer} ${index === 2 || index === 6 || index === 10 ? styles.box : ''} ${index % 2 === 1  ? styles.aside : styles.asideRight}`}>
            <Team  {...team} key={index}/>
          </div>
        ))}
      </div>
    </section>
  );
 
}
