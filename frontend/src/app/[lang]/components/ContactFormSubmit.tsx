"use client";
import { useState } from "react";
import { getStrapiURL } from "../utils/api-helpers";

export default function ContactFormSubmit({
  placeholderEmail,
  placeholderSubject,
  placeholderBody,
  text,
}: {
  placeholderEmail: string;
  placeholderSubject: string;
  placeholderBody: string;


  text: string;
}) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const [body, setBody] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit() {
    if (email === "") {
      setErrorMessage("Email cannot be blank.");
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    if (subject === "") {
      setErrorMessage("Subject cannot be blank.");
      return;
    }

    if (body === "") {
      setErrorMessage("Body cannot be blank.");
      return;
    }

    const res = await fetch(getStrapiURL() + "/api/lead-form-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { email,subject,body } }),
    });

    if (!res.ok) {
      setErrorMessage("Form failed to submit.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("Form successfully submitted!");
    setEmail("");
  }

  return (
    <div className="form_group_reg_contact flex flex-row items-center lg:self-center lg:justify-center flex-shrink-0 shadow-md lg:justify-end">
    <div className="flex flex-col space-y-2 w-full"> 
      {successMessage ? (
        <p className="text-green-700 bg-green-300 px-4 py-2 rounded-lg">
          {successMessage}
        </p>
      ) : (
        <>
          <div className="flex flex-col"> 
            <input
              type="email"
              placeholder={errorMessage || placeholderEmail}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
              />
          <input
  type="text"
  placeholder={placeholderSubject}
  onChange={(e) => setSubject(e.target.value)}
  value={subject}
  className="w-full p-3 bg-blackish-gray text-white  mb-3"   
/>
<input
  type="text"
  placeholder={placeholderBody}
  onChange={(e) => setBody(e.target.value)}
  value={body}
  className="w-full p-3 bg-blackish-gray text-white mb-3 h-24"
/>

          </div>
          <button
            type="button"
            className="btn_submit p-3 px-5 py-1 font-semibold button-bg-yellow text-gray-900 uppercase"
            onClick={handleSubmit}
            
          >
            {text}
          </button>
        </>
      )}
    </div>
  
    {errorMessage && (
      <p className="text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2">
        {errorMessage}
      </p>
    )}
  </div>
 
  );
}
