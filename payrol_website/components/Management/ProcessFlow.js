"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function WorkProcessFlow() {
  return (
    <section className="w-full px-6 md:px-16 pt-10 pb-18">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/manage/pro-vec.jpg"
            alt="Team Discussion"
            width={100}
            height={150}
            className="w-[60vh] h-[60vh] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
            PROCESS FLOW
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
            The work process of <br />
            accounting, taxation & <br />
            payroll processing
          </h2>

           <Link href="/contact" className="group mt-10 relative inline-flex h-13 items-center overflow-hidden rounded-sm bg-[#16222d] hover:bg-yellow-400 px-6 text-[15px] font-semibold text-white">
                <span
                  className="flex items-center gap-2 transition-all duration-700 ease-out
                                       group-hover:translate-x-full group-hover:opacity-0"
                >
                  <span>Get in Touch</span>
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
                  <span>Get in Touch</span>
                </span>
              </Link>
        </div>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5 md:mt-10">
        
       
        <div>
          <h1 className="text-7xl font-bold text-gray-300/60 border-t-2 border-r-5 border-orange-500 rounded-tr-2xl">01</h1> {/* DARKER */}
          <h3 className="text-2xl font-semibold mt-3">Investment Management</h3>
          <p className="text-gray-600 mt-2">
            Competitive analysis, identifying opportunities
          </p>
        </div>

       
        <div>
          <h1 className="text-7xl font-bold text-orange-300/60">02</h1> {/* DARKER */}
          <h3 className="text-2xl font-semibold mt-3">Wealth Building Solutions</h3>
          <p className="text-gray-600 mt-2">
            Competitive analysis, identifying opportunities
          </p>
        </div>

       
        <div>
          <h1 className="text-7xl font-bold text-gray-300/60 border-t-2 border-r-5 border-orange-500 rounded-tr-2xl">03</h1> {/* DARKER */}
          <h3 className="text-2xl font-semibold mt-3">Financial Planning</h3>
          <p className="text-gray-600 mt-2">
            Competitive analysis, identifying opportunities
          </p>
        </div>

     
        <div>
          <h1 className="text-7xl font-bold text-orange-300/60">04</h1> {/* DARKER */}
          <h3 className="text-2xl font-semibold mt-3">Debt Reduction</h3>
          <p className="text-gray-600 mt-2">
            Competitive analysis, identifying opportunities
          </p>
        </div>

      </div>
    </section>
  );
}
