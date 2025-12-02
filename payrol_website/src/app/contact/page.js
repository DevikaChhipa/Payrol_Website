"use client";

import ContactBanner from "../../../components/contact/ContactBanner";
import ContactSection from "../../../components/contact/ContactForm";
import PayrollFAQ from "../../../components/Faq";




export default function Contact() {
  return (    
    <>
    <div className="bg-[#eef2f5]">
         <ContactBanner />
     <ContactSection />
     <PayrollFAQ />
    </div>
    </>
  );
}