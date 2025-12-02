"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from "react-icons/io";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Stephen Welch",
      role: "Satisfied client",
      avatar: "/Home/avatar.png",
      rating: 5,
      text: "Partnering with this financial consulting team was a game-changer for our business. Their expert guidance on cash flow management and budgeting helped us optimize resources and improve profitability.",
    },
    {
      id: 2,
      name: "Maria Johnson",
      role: "Happy customer",
      avatar: "/Home/small.png",
      rating: 5,
      text: "Partnering with this financial consulting team was a game-changer for our business. Their expert guidance on cash flow management and budgeting helped us optimize resources and improve profitability.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f4f7fb] to-[#eef3f8] pt-12 md:pt-20">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-8 px-4 sm:px-8 lg:px-20">
        {/* Left: Person image */}
        <div className="w-full lg:flex-1 flex justify-center">
          <div className="relative w-full max-w-md h-72 sm:h-96 lg:h-[520px]">
            <Image
              fill
              src="/Home/testimonial.png"
              alt="Client"
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Testimonial content */}
        <div className="w-full lg:flex-1 relative overflow-hidden">
          <span className="inline-block rounded-md bg-white px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 shadow-sm">
            Our testimonial
          </span>

          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-[44px] font-semibold text-[#1f313f]">
            What our customers say?
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            loop
            className="mt-4 w-full"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative bg-white px-4 sm:px-6 rounded-2xl py-6 sm:py-8 md:py-6">
                  {/* Quote text */}
                  <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed text-gray-600 max-w-2xl">
                    {item.text}
                  </p>

                  <hr className="w-full border-gray-300 my-4" />

                  {/* Bottom: client info + arrows */}
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-[#1f313f]">
                            {item.name}
                          </p>
                          <div className="flex text-[#f5a623] text-xs">
                            {"★".repeat(item.rating)}
                          </div>
                        </div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-gray-400">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Custom Swiper nav buttons */}
                    <div className="flex gap-3 self-end sm:self-auto">
                      <button className="testimonial-prev h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-500 flex items-center justify-center hover:bg-gray-100 transition">
                        <IoMdArrowDropleftCircle className="text-xl" />
                      </button>
                      <button className="testimonial-next h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-500 flex items-center justify-center hover:bg-gray-100 transition">
                        <IoMdArrowDroprightCircle className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
