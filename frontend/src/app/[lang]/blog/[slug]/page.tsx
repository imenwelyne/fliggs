"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../../utils/fetch-api";
import Loader from "../../components/Loader";
import Article from "../../components/Article";
// import { useRouter } from "next/navigation";
interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}
const currentId = typeof window !== 'undefined'? window.location.pathname.split('/').pop(): null;
  console.log('current id is ', currentId);
export default function Profile() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [currentArt, setCurrentArt] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  
  
  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/articles`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          content: { content: ['content'] },
          images: { images: ["images"] },
          category: { populate: "*" },
          authorsBio: {
            populate: "*",
            content: { populate: "news-element" },
          },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      console.log('responseData',responseData);
      
      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[] ) => [...prevData, ...responseData.data]);
      }

      responseData.data.map((item:any)=>{
    if (item.id == currentId){
      setCurrentArt(item);
    }
  })
 
      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, []);
  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }



  if (isLoading) return <Loader />;
  
  return (
    <div>
          {currentArt && <Article data={currentArt}></Article>}
    </div>
  );
}