"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  const content = [
    {
      title: "Market Research",
      desc: "Businesses that partner with us gain a strategic advantage through deep analysis and industry insights.",
      icon: "💼",
      image: "/images/choose1.jpg",
    },
    {
      title: "Business Growth",
      desc: "We help companies scale fast with accurate planning, strong execution, and expert consulting.",
      icon: "📈",
      image: "/images/choose2.jpg",
    },
    {
      title: "Expert Guidance",
      desc: "Get trusted support from professionals who understand your needs and provide tailored solutions.",
      icon: "🧠",
      image: "/images/choose3.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
        Why <span className="text-[#fa9404]">Choose Us</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 relative max-w-6xl mx-auto">

        {/* IMAGES */}
        {content.map((item, index) => (
          <div
            key={index}
            className={`group relative cursor-pointer rounded-xl overflow-hidden shadow-md border 
              ${active === index ? "border-[#fa9404]" : "border-transparent"}`}
            onMouseEnter={() => setActive(index)}
          >
            <img
              src={item.image}
              alt="why choose"
              className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/20 group-hover:bg-black/30 transition`} />
          </div>
        ))}
      </div>

      {/* CONTENT SLIDE AREA */}
      <div className="relative max-w-6xl mx-auto mt-12 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="flex items-start gap-5">
              <div className="text-4xl">{content[active].icon}</div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {content[active].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {content[active].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
