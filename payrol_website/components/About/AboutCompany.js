"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
export default function CompanyStory() {
  return (
    <section className="bg-[#ecf0f4] py-20 md:pt-20 md:pb-2 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGES */}
        <div className="relative">
          {/* Top Image */}
          <img
            src="/about/team2.jpg"
            alt="team"
            className="w-[420px] rounded-xl shadow-md"
          />

          {/* Bottom Image (Overlapping) */}
          <img
            src="/about/team1.jpg"
            alt="office"
            className="w-[360px] rounded-xl shadow-lg absolute left-34 -top-20 border-t-4 border-l-4 border-[#fa9404]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="text-sm font-semibold bg-white px-4 py-1 rounded-full shadow-sm">
            OUR STORY
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Processing Services to businesses and individuals
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our mission is to provide exceptional Accounting, Taxation & Payroll
            Processing Services to businesses and individuals, helping them achieve.
          </p>
          <Link href="#contact" className="group mt-10 relative inline-flex h-13 items-center overflow-hidden rounded-sm bg-[#16222d] hover:bg-yellow-400 px-6 text-[15px] font-semibold text-white">
            <span className="flex items-center gap-2 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-0">
              <span>Discover More</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <FaArrowRight className="text-sm" />
              </span>
            </span>

            <span className="absolute inset-0 flex items-center gap-2 -translate-x-full opacity-0 px-6 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <FaArrowRight className="text-sm" />
              </span>
              <span>Discover More</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
