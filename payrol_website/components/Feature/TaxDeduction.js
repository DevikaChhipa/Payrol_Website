"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";

export default function TaxDeductionSection() {
  const cards = [
    {
      title: "TDS",
      icon: <FaRupeeSign />,
      desc: "TDS ensures timely tax collection by deducting tax at source from salaries, payments, and services."
    },
    {
      title: "PF",
      icon: <GiArchiveRegister />,
      desc: "Provident Fund (PF) supports long-term savings and financial security for employees."
    },
    {
      title: "ESI",
      icon: <MdHealthAndSafety />,
      desc: "ESI provides health insurance and medical benefits to workers under the ESI scheme."
    }
  ];

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/manage/tax.webp')`
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      {/* MAIN WRAPPER */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div className="text-white p-6">
          <span className="bg-white text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
            Tax Deduction System
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight my-4">
            Tax deduction system (TDS, PF, ESI)
          </h2>

          <p className="text-gray-200 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        {/* RIGHT SIDE SLIDING CARDS */}
        <div className="relative h-[260px] overflow-hidden flex items-center justify-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ x: 500, opacity: 0 }}
              animate={
                activeCard === index
                  ? { x: 0, opacity: 1 }
                  : { x: 500, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="
                absolute top-0
                bg-white rounded-2xl p-8
                w-[90%] md:w-[420px]
                shadow-[0_8px_30px_rgba(255,150,0,0.25)]
                border-l-4 border-[#ff9600]
                hover:scale-[1.02] transition-transform
              "
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#ff9600] text-4xl bg-[#fff4e5] p-3 rounded-xl shadow-inner">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800">{card.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
