import Image from 'next/image';
import React from 'react';

export default function TestimonialSection() {
  return (
    <section className="bg-linear-to-b from-[#f4f7fb] to-[#eef3f8] pt-20 px-10">
      <div className="max-w-6xl mx-auto flex items-center gap-16">
        {/* Left: Person image */}
        <div className="flex-1 flex justify-center">
          <Image
          fill
            src="/Home/testimonial.png"
            alt="Client"
            className="max-h-[600px] object-contain"
          />
        </div>

        {/* Right: Testimonial content */}
        <div className="flex-1">
          <span className="inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 shadow-sm">
            Our testimonial
          </span>

          <h2 className="mt-6 text-4xl md:text-[40px] font-semibold text-[#1f313f]">
            What our customers say?
          </h2>

          <div className="mt-8 relative bg-white rounded-xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-10 py-10">
            {/* Quote text */}
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl">
              “Partnering with this financial consulting team was a game-changer for our
              business. Their expert guidance on cash flow management and budgeting
              helped us optimize resources and improve profitability.”
            </p>

            {/* Quote icon right */}
            <div className="absolute right-10 top-8 text-4xl text-[#f5a623]">
              ”
            </div>

            {/* Bottom: client info + arrows */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="/images/client-avatar.jpg"
                  alt="Stephen Welch"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[#1f313f]">Stephen Welch</p>
                    <div className="flex text-[#f5a623] text-xs">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                    Satisfied client
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-500 flex items-center justify-center hover:bg-gray-100 transition">
                  ‹
                </button>
                <button className="h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-500 flex items-center justify-center hover:bg-gray-100 transition">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
