import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

export default function WhyChoose() {
    return (
        <>
           <section className="bg-[#ecf0f4] pb-16 pt-24 py-20 px-24 whyus-section relative">
           <div className="max-w-6xl mx-auto flex items-start justify-between gap-16">
        {/* Left: Text block */}
        <div className="max-w-xl">
          <button className="mb-4 rounded-md bg-[#f5a623] px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-white">
            Why choose us
          </button>
          <h2 className="text-4xl leading-snug font-semibold text-black">
            Amazing accounting<br />
            statistics showing the<br />
            power of numbers.
          </h2>
        </div>

        {/* Right: Stats */}
        <div className="flex-1 flex gap-16">
          {/* Stat 1 */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#f5a623] text-2xl"><FaArrowUp /></span>
              <span className="text-black text-4xl font-semibold">50%</span>
            </div>
            <div className="mt-4 h-px w-28 bg-black/10" />
            <h3 className="mt-4 text-black font-semibold text-[20px]">
              Client retention rate
            </h3>
            <p className="mt-2 text-sm text-black max-w-xs">
              We put a strong focus on the needs of your business to figure out solutions.
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#f5a623] text-2xl"><FaArrowUp /></span>
              <span className="text-black text-4xl font-semibold">98%</span>
            </div>
            <div className="mt-4 h-px w-28 bg-black/10" />
            <h3 className="mt-4 text-black font-semibold">
              Most outsourced tasks
            </h3>
            <p className="mt-2 text-sm text-black max-w-xs">
              We put a strong focus on the needs of your business to figure out solutions.
            </p>
          </div>
        </div>
      </div>
           </section>
            
        </>
    )
}
