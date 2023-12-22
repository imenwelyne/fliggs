import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
import styles from '../styles/grid.module.css'

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

interface GridProps {
  
  data: {
    title:string;
    component: Component[];
  };
}

interface Component {
  name : string;
  image : any;
}




function Component({name, image}: Component) {
console.log('ppi');
console.log(name, image);
  
  return (
    <section className={styles.box}>
            <div className={styles.boxTitle} >
            <HighlightedText
              text={name}
              tag="h1"
              className="text-2xl custom-font-bold text-white leading-none"
              color="#FAFF00"
            />
            </div>
            <div className={styles.boxImg}>
            {image.data.map((item:any)=>{
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
            </div>
    </section>
  );
}

export default function Grid({ data }: GridProps) {
  console.log('grid data',data.component);
  
  return (
<section className={`${styles.compCont} lg:p-24 p-12`}>
      <h1 className="custom-font-bold heroTitle display-title " style={{display:"flex",justifyContent:"center",width:"100%",fontSize:"3rem"}}>Preview Components</h1>
      {data.component && data.component.map((component, index) => (
        <div className={`${styles.compBox} mt-16`}>
           <Component key={index} {...component} />
        </div>
        ))}
</section>



  );
 
}
