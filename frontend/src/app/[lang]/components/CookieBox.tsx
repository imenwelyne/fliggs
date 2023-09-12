"use client"
import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieBox = () => {
  const [showConsent, setShowConsent] = useState(true);
  
  

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    setCookie("localConsent", "true", {expires: oneYearFromNow});
  };
  const refuseCookie = () => {
    setShowConsent(true);
  };

  if (showConsent) {
    return null;
  }

  return (
<div className="fixed inset-0 bg-slate-700 bg-opacity-70">
  <div className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 bg-gray-100">
    <span className="text-dark text-base text-center md:text-left md:mr-16 mb-4 md:mb-0">
      This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
    </span>
    <div className="flex flex-col md:flex-row">
      <button className="bg-green-500 py-2 px-8 rounded text-white mb-2 md:mb-0 md:mr-2" onClick={() => acceptCookie()}>
        Accept
      </button>
      <button className="bg-gray-400 py-2 px-8 rounded text-white" onClick={() => refuseCookie()}>
        Refuser
      </button>
    </div>
  </div>
</div>

  );
};

export default CookieBox;