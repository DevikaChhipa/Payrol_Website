"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FinancialProcess() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Basic Research",
      desc: "In ligula libero neque neque nulla neque rutrum. lacus quam.",
      img: "/about/business1.jpg",
    },
    {
      num: "02",
      title: "Discovery",
      desc: "In ligula libero neque neque nulla neque rutrum. lacus quam.",
      img: "/about/business2.jpg",
    },
    {
      num: "03",
      title: "Build Plan",
      desc: "In ligula libero neque neque nulla neque rutrum. lacus quam.",
      img: "/about/business3.jpg",
    },
    {
      num: "04",
      title: "Execute",
      desc: "In ligula libero neque neque nulla neque rutrum. lacus quam.",
      img: "/about/business4.jpg",
    },
  ];

  return (
   <section className="w-full bg-[#111C27] text-white py-20 px-6 md:px-16 mb-6 md:mb-12">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">

    {/* ---------- SECTION 1 : HEADING + PARAGRAPH ---------- */}
    <div>
      <div className="inline-block bg-yellow-600/80 text-black px-4 py-1 rounded-md text-sm font-semibold mb-4">
        WHY BUSINESSES CAN TRUST US
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Successful financial <br /> control process
      </h2>

      <p className="text-gray-300 max-w-sm">
        Stay organized and focused on growth while we handle your financial
        records and help you scale smoothly.
      </p>
    </div>

    <div className="space-y-10">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-6 cursor-pointer group"
          onMouseEnter={() => setActive(index)}
        >
          <div className="text-2xl font-semibold text-gray-300 group-hover:text-yellow-500 transition">
            {step.num}
          </div>

          <div>
            <h3 className={`text-xl font-semibold ${
              active === index ? "text-yellow-500" : "text-white"
            }`}>
              {step.title}
            </h3>

            <p className="text-gray-400">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="relative h-[420px] rounded-xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={steps[active].img}
          src={steps[active].img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>

  </div>
</section>

  );
}
