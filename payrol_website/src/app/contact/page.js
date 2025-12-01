"use client";

import ContactBanner from "../../../components/contact/ContactBanner";
import ContactSection from "../../../components/contact/ContactForm";




export default function Contact() {
  return (    
    <>
    <div className="bg-[#eef2f5]">
         <ContactBanner />
     <ContactSection />
    </div>
    </>
  );
}