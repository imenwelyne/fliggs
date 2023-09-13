"use client";
import { useState } from "react";
import { getStrapiURL } from "../utils/api-helpers";

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
  }

  return (
    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
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
  placeholder={placeholderFirstName}
  onChange={(e) => setFirstName(e.target.value)}
  value={firstName}
  className="w-full p-3 bg-blackish-gray text-white  mb-3"   
/>
            <input
              type="text"
              placeholder={placeholderLastName}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="w-full p-3 bg-blackish-gray text-white  mb-3"   
              />
          </div>
          <button
            type="button"
            className="w-full p-3 font-semibold button-bg-yellow text-gray-900 uppercase"
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
