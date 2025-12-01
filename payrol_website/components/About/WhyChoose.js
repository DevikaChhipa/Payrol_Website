"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Landmark, UserRound } from "lucide-react";

export default function WhyChooseUs() {

  const [active, setActive] = useState(0);

const services = [
    {
      title: "Market Research",
      desc: "Businesses that partner with us gain a strategic advantage",
      icon: <Wallet className="w-10 h-10 text-orange-500" />,
      image: "/about/why-img1.jpg",
    },
    {
      title: "Risk Management",
      desc: "Businesses that partner with us gain a strategic advantage",
      icon: <Landmark className="w-10 h-10 text-orange-500" />,
      image: "/about/why-img2.jpg",
    },
    {
      title: "Tax Preparation",
      desc: "Businesses that partner with us gain a strategic advantage",
      icon: <UserRound className="w-10 h-10 text-orange-500" />,
      image: "/about/why-img3.jpg",
    },
  ];


  return (
    <>
    <section className="py-14 px-6 md:px-16 bg-[#ecf0f4]">


      <div className="flex justify-center">
        <span className="px-4 py-1 text-sm rounded-md bg-white font-bold text-gray-600">
          WHY CHOOSE US
        </span>
      </div>


      <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mt-6">
        Amazing accounting statistics show the <br /> power of numbers.
      </h2>


      <div className="grid lg:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">


        <div className="mx-auto">
          <Image
            src="/about/why-img.jpg"
            width={600}
            height={350}
            alt="chart"
            className="w-75 object-contain rounded-2xl"
          />
        </div>


        <div className="text-gray-600 leading-relaxed">
          <p>
            Our firm is built on a foundation of responsiveness. We understand
            that in a fast-paced business world, a timely answer is a competitive
            advantage.
          </p>

          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-3 w-3 rounded-full bg-[#fa9404]"></span>
              Social security and pension optimization
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-3 w-3 rounded-full bg-[#fa9404]"></span>
              GST, TDS, and income tax filings
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-3 w-3 rounded-full bg-[#fa9404]"></span>
              Tax deductions & exemptions guidance
            </li>
          </ul>
        </div>
      </div>

   <section className="w-full pb-12 px-6 md:px-10 mt-10">
      <div className="grid md:grid-cols-3 gap-6">

        {services.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer group overflow-hidden"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(0)}
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              width={100}
            height={100}
            alt="chart"
              className="w-full h-[280px] object-cover rounded-xl shadow-lg"
            />


            <AnimatePresence mode="wait">
              {active === index && (
             <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 40 }}
  transition={{ duration: 0.35 }}
  className="
    absolute bottom-0 left-0 right-0 h-1/2
    bg-gradient-to-t from-orange-500/90 via-orange-500/70 to-transparent
    px-5 shadow-xl text-white backdrop-blur-[2px] rounded-b-xl
  "
>
  <div className="mb-2">{item.icon}</div>
  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
  <p className="my-2 text-white/90">{item.desc}</p>
</motion.div>

              )}
            </AnimatePresence>
          </div>
        ))}

      </div>
    </section>
    </section>


    </>
  );
}
