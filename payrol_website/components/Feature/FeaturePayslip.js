"use client";

import { FaRegHandshake, FaRegCalendarCheck } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";

export default function PayslipGeneration() {
  const steps = [
    {
      icon: <HiOutlineChatAlt2 size={40} />,
      title: "Request a Meeting",
      description:
        "We'll spend some time learning more about your business and your specific workforce challenges.",
    },
    {
      icon: <FaRegCalendarCheck size={40} />,
      title: "Receive a Custom Plan",
      description:
        "We'll show you how to solve your biggest workforce challenges with one powerful solution.",
    },
    {
      icon: <FaRegHandshake size={40} />,
      title: "Let's Make it Happen",
      description:
        "Your salesperson and dedicated team will guide you through the transition process and your first payroll.",
    },
  ];

  return (
    <section className="relative bg-[#FFF8F0] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
      {/* Random shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FA9404] opacity-20 rounded-full mix-blend-multiply animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-32 h-32 bg-[#FA9404] opacity-15 rounded-full mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-[#FA9404] opacity-25 rounded-full mix-blend-multiply animate-pulse"></div>
  <span className="bg-white text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
           Payslip Generation
          </span>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 mt-5">
        Let's get started in 3 easy steps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-lg transition-transform hover:scale-105"
          >
            <div className="mb-4 text-[#FA9404]">{step.icon}</div>
            <h3 className="font-semibold text-xl mb-2 text-gray-900">{step.title}</h3>
            <p className="text-sm text-gray-700 opacity-90">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
