"use client";

import { motion } from "framer-motion";

export default function Privacy() {
  const termsData = {
    title: "Privacy Policy for Zenpay",
    updated: "1st Dec. 2025",

    intro: [
      "Our privacy policy prioritizes the protection of your personal data, ensuring that any information we collect is securely stored and used exclusively for the purpose of delivering and enhancing our services.",
      "We are committed to respecting your privacy and will never share your data with third parties without your explicit consent.",
      "Additionally, we adhere to all applicable data protection laws and regulations, including GDPR and other relevant frameworks.",
      "Our policy ensures transparency, providing you with clear information on how your data is collected, processed, and stored, so you can make informed decisions about your privacy and security when interacting with our services."
    ],

    sections: [
      {
        heading: "1. Seclusion of Your Data",
        italic: "",
        points: [
          "Your personal data is securely stored and used only to provide and improve our services.",
          "We never share your information with third parties without explicit consent.",
          "All data is handled in compliance with GDPR and applicable privacy laws."
        ]
      },

      {
        heading: "2. Data Security",
        italic:
          "We take reasonable precautions to protect your personal data from unauthorized access, disclosure, alteration, or destruction.",
        points: [
          "We use encryption, secure servers, and other protection mechanisms.",
          "Data security ensures confidentiality, integrity, and availability of your data.",
          "Our systems safeguard against unauthorized access, corruption, theft, or loss."
        ]
      },

      {
        heading: "3. Confidentiality",
        italic:
          "Confidentiality ensures that sensitive information is accessible only to authorized individuals or systems.",
        points: [
          "We use encryption, access controls, and authentication mechanisms.",
          "We support two-factor authentication, secure passwords, and identity verification.",
          "Your sensitive information is protected from unauthorized disclosure."
        ]
      },

      {
        heading: "4. Integrity",
        italic:
          "Data integrity involves protecting data from being altered or tampered with, either accidentally or maliciously.",
        points: [
          "We use checksum algorithms, hash functions, and digital signatures.",
          "These tools ensure that data remains accurate and unmodified.",
          "Integrity checks protect information during transmission and storage."
        ]
      },

      {
        heading: "5. Availability",
        italic:
          "Availability ensures that data is accessible to authorized users when needed, even during disruptions.",
        points: [
          "We maintain regular backups and redundant systems.",
          "We have disaster recovery plans and network security measures in place.",
          "Firewalls and intrusion detection prevent downtime and data loss."
        ]
      },

      {
        heading: "6. Sharing Your Information",
        italic:
          "We prioritize the protection of your personal information and respect your privacy.",
        points: [
          "We do not sell, trade, or rent personal data for marketing or commercial use.",
          "Data is shared only with trusted partners who assist in business operations.",
          "All third-party partners sign strict confidentiality agreements.",
          "These partners follow industry standards for privacy and security.",
          "Your data is shared only when necessary to deliver our services.",
          "We never disclose your personal information without consent unless required by law."
        ]
      },

      {
        heading: "7. Concern for Cookies",
        italic:
          "Cookies help improve your browsing experience—but you have full control over them.",
        points: [
          "Modern browsers allow you to block or delete cookies.",
          "Blocking cookies may affect website functionality.",
          "We comply with GDPR and CCPA for cookie management.",
          "Users are informed about cookie types and allowed to manage preferences.",
          "Only essential cookies run by default; others require consent.",
          "Our cookie policy remains transparent and regularly updated.",
          "You can opt-out or delete cookies anytime."
        ]
      }
    ]
  };

  return (
    <>
       <section className="relative overflow-hidden -mt-32 bg-cover bg-center bg-no-repeat py-24 px-6 md:px-16"
      style={{ backgroundImage: "url('about/banner-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>

     
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#ffdfb2] rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ffe1c2] rounded-full opacity-30 blur-3xl animate-ping"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl md:mt-30 font-bold text-gray-200 leading-tight">
            Privacy <span className="text-[#fa9404]">Policy</span>
          </h2>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >

          </motion.div>
        </motion.div>



      </div>
    </section>
    <section className="px-6 md:px-20 py-16 bg-white text-gray-800 leading-relaxed">
      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-bold">{termsData.title}</h1>
      <p className="text-gray-500 text-sm mt-1">Last updated: {termsData.updated}</p>

      {/* INTRO */}
      <div className="mt-6 space-y-4">
        {termsData.intro.map((para, index) => (
          <p key={index} className="text-base text-gray-700">
            {para}
          </p>
        ))}
      </div>

      {/* SECTIONS */}
      <div className="mt-10 space-y-10">
        {termsData.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{section.heading}</h2>

            {section.italic && (
              <p className="italic text-gray-700 mb-4">{section.italic}</p>
            )}

            {section.subHeading && (
              <p className="font-semibold text-gray-800 mb-2">{section.subHeading}</p>
            )}

            <ul className="space-y-2">
              {section.points.map((point, idx) => (
                <li key={idx} className="text-gray-700">
                  {idx + 1}. {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
