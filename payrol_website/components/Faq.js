"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function PayrollFAQ() {
 const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is a payroll management system?",
      answer:
        "A payroll management system automates employee salary calculation, tax deductions, attendance integration, reimbursements, compliance, and salary slip generation."
    },
    {
      question: "Does the system automate salary calculations?",
      answer:
        "Yes. The payroll system calculates salaries based on attendance, overtime, leaves, deductions, allowances, and configured tax rules."
    },
    {
      question: "Does payroll management ensure statutory compliance?",
      answer:
        "Yes. The system helps maintain compliance with PF, ESI, PT, TDS, LWF, and other statutory regulations automatically."
    },
    {
      question: "Can employees download their salary slips?",
      answer:
        "Employees can securely download salary slips, view tax summaries, apply for leaves, and update KYC through their portal."
    },
    {
      question: "Can payroll integrate with attendance or biometric devices?",
      answer:
        "Yes. The system integrates with biometric machines and HRMS tools to fetch in/out times automatically."
    },
    {
      question: "Is payroll data secure?",
      answer:
        "The platform ensures data protection with encryption, role-based access, secure authentication, and automated backups."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs font-semibold tracking-wide flex items-center gap-2 text-[#fa9404]">
            <span className="w-2 h-2 bg-[#fa9404] rounded-full"></span>
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1924] mt-3 leading-snug">
            Find answers about our payroll management system
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
            Learn everything about payroll calculation, compliance,
            integrations, employee services, and more.
          </p>
        </div>

        {/* RIGHT ACCORDION */}
      <div className="space-y-3">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="rounded-xl border border-[#fa9404] overflow-hidden"
    >
      {/* FAQ HEADER */}
      <button
        onClick={() => toggleFAQ(index)}
        className={`w-full flex justify-between items-center px-5 py-4 text-left font-medium text-sm md:text-base transition-all ${
          activeIndex === index
            ? "bg-[#fa9404] text-[#0e1924]"
            : "bg-[#0e1924] text-white"
        }`}
      >
        {faq.question}

        {activeIndex === index ? (
          <IoIosArrowUp size={22} />
        ) : (
          <IoIosArrowDown size={22} />
        )}
      </button>

      {/* SMOOTH ANIMATION */}
      <AnimatePresence>
        {activeIndex === index && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{
              maxHeight: 500,
              opacity: 1,
              transition: { duration: 0.45, ease: "easeInOut" }
            }}
            exit={{
              maxHeight: 0,
              opacity: 0,
              transition: { duration: 0.35, ease: "easeInOut" }
            }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 bg-[#fff9f1] text-[#0e1924] text-sm leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
