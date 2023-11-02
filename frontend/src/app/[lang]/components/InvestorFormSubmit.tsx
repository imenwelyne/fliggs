"use client";
import { useState } from "react";
import { getStrapiURL } from "../utils/api-helpers";
import { InlineWidget } from "react-calendly";
export default function FormSubmit({
  url,
}: {

  url: string;
}) {





  return (
    <div className="form_group_reg flex flex-row items-center lg:self-center lg:justify-center flex-shrink-0 shadow-md lg:justify-end">
    <div className="flex flex-col space-y-2 w-full"> 
 
        <>
          <div className="flex flex-col"> 
          <InlineWidget styles={{
  height: '400px'
}} pageSettings={{
  hideGdprBanner: true, // Hide GDPR banner
  backgroundColor: '000000',
  hideEventTypeDetails: true,
  hideLandingPageDetails: true,
  primaryColor: 'FAFF00',
  textColor: 'ffffff'
}} url={url} />
          </div>
         
        </> 
     
    </div>
  
   
 
  </div>
 
  );
}
