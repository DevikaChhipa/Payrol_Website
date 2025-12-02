import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Featuremultibranch() {
  return (
    <section className="bg-[#ecf0f4] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          {/* Heading Label */}
          <div className="flex items-center gap-2 mb-4">
             <span className="bg-white text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
            Multi Branch Payroll
          </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight  mb-6">
            Building Smarter Homes <br /> With One Innovation
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

         <Link href="/contact" className="group mt-2 relative inline-flex h-13 items-center overflow-hidden rounded-sm bg-[#16222d] hover:bg-yellow-400 px-6 text-[15px] font-semibold text-white">
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

        {/* RIGHT STATS SECTION */}
        <div className="grid grid-cols-2 gap-y-10 pl-10">

          {/* Stat 1 */}
          <div className="border-l-4 border-[#fa9404] pl-6">
            <h3 className="text-2xl font-bold">Basic Research</h3>
            <p className="text-gray-600 mt-1 text-sm py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>

          {/* Stat 2 */}
          <div className="border-l-4 border-[#fa9404] pl-6">
            <h3 className="text-2xl font-bold">Discovery</h3>
            <p className="text-gray-600 mt-1 text-sm py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>

          {/* Stat 3 */}
          <div className="border-l-4 border-[#fa9404] pl-6">
            <h3 className="text-2xl font-bold">Build Plan</h3>
            <p className="text-gray-600 mt-1 text-sm py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>

          {/* Stat 4 */}
          <div className="border-l-4 border-[#fa9404] pl-6">
            <h3 className="text-2xl font-bold">Execute</h3>
            <p className="text-gray-600 mt-1 text-sm py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
