"use client";

import { motion } from "framer-motion";

export default function Refund() {
  const termsData = {
    title: "Cancellation & Refund Policy for Zenpay",
    updated: "1st Dec. 2025",

    intro: [
      "Our cancellation and refund policy outlines the terms and conditions under which a customer can cancel a service or order and potentially receive a refund.",
      "For a software company, this policy typically includes the cancellation process, refund conditions, non-refundable services, refund processing timelines, late cancellation rules, and refund methods."
    ],

    sections: [
      {
        heading: "1. Cancellation Process",
        italic:
          "The cancellation policy clearly defines the steps a customer must follow to cancel a service or order.",
        points: [
          "Customers may need to submit a formal cancellation request within a specific timeframe such as 7 or 14 days.",
          "Cancellations must be submitted through approved channels such as email, support portal, or a dedicated cancellation form.",
          "Customers may need to provide order details or proof of purchase for accurate processing.",
          "These steps help streamline the process and avoid disputes or delays."
        ]
      },

      {
        heading: "2. Refund Conditions",
        italic:
          "The refund policy outlines the conditions under which a customer becomes eligible for a refund.",
        points: [
          "Refunds may apply if the service was not delivered as promised or expectations were not met.",
          "Refunds may be applicable if cancellation is done within 7–14 days of purchase.",
          "If the software has technical issues preventing normal use, the customer may qualify for a refund.",
          "Refunds may be partial or full depending on usage or stage of service delivery."
        ]
      },

      {
        heading: "3. Non-Refundable Services",
        italic: "Certain services or fees are strictly non-refundable.",
        points: [
          "Setup fees covering initial configuration work are non-refundable.",
          "Custom development work is non-refundable as it is tailored and cannot be resold.",
          "Payments made for third-party software or licenses are non-refundable.",
          "These terms help manage expectations and prevent disputes."
        ]
      },

      {
        heading: "4. Refund Processing Time",
        italic:
          "The policy specifies how long it takes to process a refund after approval.",
        points: [
          "Refunds are processed within 5 to 10 business days.",
          "Processing time may vary due to holidays, bank delays, or verification steps.",
          "Customers will be informed of any unexpected delays.",
          "Providing a clear timeline increases transparency and trust."
        ]
      },

      {
        heading: "5. Late Cancellations or Service Usage",
        italic:
          "If a customer has used part of the service, a partial refund may apply.",
        points: [
          "The company may deduct charges for service already consumed.",
          "Refunds depend on the stage of delivery, time elapsed, and usage level.",
          "Heavily used services or significant support consumed may reduce refund amount.",
          "This ensures fairness to both the customer and the company."
        ]
      },

      {
        heading: "6. Refund Method",
        italic:
          "Refunds are issued in a clear and transparent manner.",
        points: [
          "Refunds are issued to the same payment method used during purchase.",
          "Refund timeline depends on bank processing times and payment gateways.",
          "If the original payment method is unavailable, an alternative method may be requested.",
          "The process ensures clarity and prevents confusion during refunds."
        ]
      }
    ]
  };

  return (
    <>
      {/* BANNER */}
      <section
        className="relative overflow-hidden -mt-32 bg-cover bg-center bg-no-repeat py-24 px-6 md:px-16"
        style={{ backgroundImage: "url('about/banner-bg.jpg')" }}
      >
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
              Cancellation  &<span className="text-[#fa9404]"> Refund Policy</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-20 py-16 bg-white text-gray-800 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold">{termsData.title}</h1>
        <p className="text-gray-500 text-sm mt-1">
          Last updated: {termsData.updated}
        </p>

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
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {section.heading}
              </h2>

              {section.italic && (
                <p className="italic text-gray-700 mb-4">{section.italic}</p>
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
