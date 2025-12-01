"use client";

import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function BusinessNeed() {
  return (
    <section className="w-full">
      {/* TOP DARK SECTION */}
    
    <div className="bg-[#0E1924] text-white px-8 md:px-16 py-20">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <button className="bg-[#fa9404] text-black text-sm font-semibold px-4 py-2 rounded-md">
            WHY BUSINESSES NEED PAYROLL SYSTEM
          </button>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-6 max-w-2xl">
            Amazing accounting <br /> statistics showing the <br /> power of
            numbers.
          </h2>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

            {/* STAT 1 */}
            <div className="flex items-start gap-4">
              <div className="animate-rise">
                <FaArrowUp className="text-[#fa9404] text-3xl" />
              </div>

              <div>
                <h3 className="text-4xl font-bold">50%</h3>
                <p className="font-semibold mt-2 text-[#fa9404]">Client retention rate</p>
                <p className="text-gray-300 mt-2 max-w-sm">
                  We put strong focus on the needs of your business to figure out
                  solutions.
                </p>
              </div>
            </div>

            {/* STAT 2 */}
            <div className="flex items-start gap-4">
              <div className="animate-rise">
                <FaArrowUp className="text-[#fa9404] text-3xl" />
              </div>

              <div>
                <h3 className="text-4xl font-bold">98%</h3>
                <p className="font-semibold mt-2 text-[#fa9404]">Most outsourced tasks</p>
                <p className="text-gray-300 mt-2 max-w-sm">
                  We put strong focus on the needs of your business to figure out
                  solutions.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SMALL IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/manage/business-img2.jpg"
            alt="stats preview"
            className="w-full max-w-xs rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>
    </div>

      {/* BOTTOM IMAGE SECTION */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="/manage/business-team.jpg"
          alt="Business Team"
          className="w-full h-full object-cover"
        />

        {/* BLACK GRADIENT FROM BOTTOM */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        {/* TEXT ON IMAGE */}
        <div className="absolute bottom-16 left-8 md:left-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-xl">
            We make the creative <br /> solutions for business!
          </h2>

          <Link href="#contact" className="group mt-10 relative inline-flex h-13 items-center overflow-hidden rounded-sm bg-[#16222d] hover:bg-yellow-400 px-6 text-[15px] font-semibold text-white">
                <span
                  className="flex items-center gap-2 transition-all duration-700 ease-out
                                       group-hover:translate-x-full group-hover:opacity-0"
                >
                  <span>Free Consultation</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <FaArrowRight className="text-sm" />
                  </span>
                </span>

                <span
                  className="absolute inset-0 flex items-center gap-2 -translate-x-full opacity-0
                                       px-6 transition-all duration-700 ease-out
                                       group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <FaArrowRight className="text-sm" />
                  </span>
                  <span>Free Consultation</span>
                </span>
              </Link>
        </div>
      </div>

      {/* ARROW ANIMATION */}
      <style>{`
        @keyframes rise {
          0% { transform: translateY(12px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-12px); opacity: 0; }
        }
        .animate-rise {
          animation: rise 1.7s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
