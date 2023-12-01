"use client";
import { useState } from "react";
import { getStrapiURL } from "../utils/api-helpers";
import { CUSTOMER_IO_KEY } from "../utils/constants";


export default function FormSubmit({
  placeholderEmail,
  placeholderFirstName,
  placeholderLastName,
  text,
}: {
  placeholderEmail: string;
  placeholderFirstName: string;
  placeholderLastName: string;

  text: string;
}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;
  // const cutomerIoToken = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  async function submitToExternalAPI() {
    try {
      const response = await fetch('https://track.customer.io/api/v1/forms/01hfemgzydpxpqz8bw9hp8d8ws/submit', {
        method: 'POST',
        headers: {
          'Authorization': CUSTOMER_IO_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: email,
            first_name: firstName,
            last_name: lastName,
            customer_type : 'prospect',
            registration_status : 'new',
            source_url: 'www.fliggs.com',
            source_type : 'web-form'
          }
        }),
      });
  
      if (!response.ok) {
        throw new Error('External API submission failed');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error submitting to external API:', error);
    }
  }


  async function handleSubmit() {
    if (email === "") {
      setErrorMessage("Email cannot be blank.");
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    if (firstName === "") {
      setErrorMessage("First name cannot be blank.");
      return;
    }

    if (lastName === "") {
      setErrorMessage("Last name cannot be blank.");
      return;
    }

    const res = await fetch(getStrapiURL() + "/api/lead-form-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { email,firstName,lastName } }),
    });

    if (!res.ok) {
      setErrorMessage("Form failed to submit.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("Form successfully submitted!");
    setEmail("");
    await submitToExternalAPI();
  }

  return (
    <div className="form_group_reg flex flex-row items-center lg:self-center lg:justify-center flex-shrink-0 shadow-md lg:justify-end">
    <div className="flex flex-col space-y-2 w-full">
      <form> 
      {successMessage ? (
        <p className="text-green-700 bg-green-300 px-4 py-2 rounded-lg">
          {successMessage}
        </p>
      ) : (
        <>
          <div className="flex flex-col"> 
            <input
              type="hidden"
              value="prospect"
              name = "customer_type"
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
            />
            <input
              type="hidden"
              value="new"
              name = "registration_status"
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
            />
            <input
              type="hidden"
              value="web-form"
              name="source_type"
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
            />
            <input
              type="hidden"
              value="https://fliggs.com"
              name="source_url"
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
            />
            <input
              type="email"
              name="email"
              placeholder={errorMessage || placeholderEmail}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
              />
            <input
              type="text"
              name="first_name"
              placeholder={placeholderFirstName}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
            />
            <input
              type="text"
              name="last_name"
              placeholder={placeholderLastName}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
              />
          </div>
          <button
            type="button"
            className="btn_submit p-3 custom-font-book font-spacing button-bg-yellow text-gray-900 uppercase"
            onClick={handleSubmit}
            
          >
            {text}
          </button>
        </> 
      )}
          {errorMessage && (
      <p className="text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2">
        {errorMessage}
      </p>
    )}
      </form>
    </div>
  

  </div>
 
  );
  
}
