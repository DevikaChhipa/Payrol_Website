import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

export default function WhyChoose() {
  return (
    <section className="bg-[#ecf0f4] py-16 md:py-20 lg:pt-24 lg:pb-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
        {/* Left: Text block */}
        <div className="w-full lg:max-w-xl">
          <button className="mb-4 rounded-md bg-[#f5a623] px-4 sm:px-5 py-2 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.15em] text-white">
            Why choose us
          </button>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-snug font-semibold text-black">
            Amazing accounting<br />
            statistics showing the<br />
            power of numbers.
          </h2>
        </div>

        {/* Right: Stats */}
        <div className="w-full flex flex-col sm:flex-row gap-8 lg:gap-16 mt-8 lg:mt-0">
          {/* Stat 1 */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[#f5a623] text-xl sm:text-2xl">
                <FaArrowUp />
              </span>
              <span className="text-black text-3xl sm:text-4xl font-semibold">
                50%
              </span>
            </div>
            <div className="mt-4 h-px w-24 sm:w-28 bg-black/10" />
            <h3 className="mt-4 text-black font-semibold text-[18px] sm:text-[20px]">
              Client retention rate
            </h3>
            <p className="mt-2 text-sm text-black max-w-xs">
              We put a strong focus on the needs of your business to figure out solutions.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[#f5a623] text-xl sm:text-2xl">
                <FaArrowUp />
              </span>
              <span className="text-black text-3xl sm:text-4xl font-semibold">
                98%
              </span>
            </div>
            <div className="mt-4 h-px w-24 sm:w-28 bg-black/10" />
            <h3 className="mt-4 text-black font-semibold text-[18px] sm:text-[20px]">
              Most outsourced tasks
            </h3>
            <p className="mt-2 text-sm text-black max-w-xs">
              We put a strong focus on the needs of your business to figure out solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
