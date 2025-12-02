"use client";

import Image from "next/image";
import { useState } from "react";

export default function AttendanceandIntegration() {
  const cards = [
    {
      id: 1,
      title: "Solutions for 1-9 employees",
      text: "Cut Through the red Tape with Payonline Solutions for Small Business",
      img: "/about/business3.jpg",
    },
    {
      id: 2,
      title: "Solutions for 10-19 employees",
      text: "Cut Through the red Tape with Payonline Solutions for Small Business",
      img: "/about/mission.png",
    },
    {
      id: 3,
      title: "Solutions for 20-49 employees",
      text: "Cut Through the red Tape with Payonline Solutions for Small Business",
      img: "/about/why-img.jpg",
    },
    {
      id: 4,
      title: "Solutions for 50-100 employees",
      text: "Cut Through the red Tape with Payonline Solutions for Small Business",
      img: "/feature/feature-banner.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 mx-auto">
       <div className="flex justify-center">
  <span className="bg-white text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
    LEAVE AND ATTENDANCE INTEGRATION
  </span>
</div>

      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0a1f44] mt-2">
        HR solutions that grow with<br />your business
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              group 
              w-full h-auto 
              bg-white 
              hover:bg-[#fa9404] 
              transition-all duration-500 
              rounded-xl shadow-md 
              flex items-center gap-6 px-8 py-6 
              cursor-pointer
            "
          >
            {/* Circular Image */}
            <div className="min-w-[150px] min-h-[150px] relative">
              <Image
                src={card.img}
                alt={card.title}
                width={200}
                height={200}
                className="
                  rounded-full object-cover 
                  w-[150px] h-[150px]
                  transition-all duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-[#0a4abb] group-hover:text-white transition-all duration-500">
                {card.title}
              </p>

              <h3 className="text-lg font-bold text-[#0a1f44] group-hover:text-white transition-all duration-500 leading-snug">
                {card.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
