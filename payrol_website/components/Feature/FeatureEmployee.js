"use client";

import { FaRegHandshake, FaRegMoneyBillAlt, FaRegUserCircle } from "react-icons/fa";

export default function EmployeeSelfService() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-center relative">

      {/* Heading */}
      <div className="mb-16">
        <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
           EMPLOYEE SELF SERVICE PORTAl
          </span>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-slideUpSlow mt-4">
          Simple Steps to Smarter Financial Accounting
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto animate-fadeInSlow delay-200">
          From consultation to results, our process is designed to give you clarity,
          compliance, and confidence in your finances.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row items-center justify-center relative">

       

        {/* Step 1 */}
        <div className="group flex-1 flex flex-col items-center transition-all duration-300 hover:scale-105">
          <div className="w-24 h-24 flex items-center justify-center rounded-full mb-5 
             bg-[#fa9404] text-white shadow-xl transition-all duration-300 
             group-hover:bg-white group-hover:text-[#fa9404] group-hover:border-2 group-hover:border-[#fa9404]">
            <FaRegHandshake size={34} />
          </div>

          <h3 className="text-lg font-semibold mb-2">Consultation</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Discuss your business needs and financial goals with our accounting experts.
          </p>
        </div>

        {/* Step 2 */}
        <div className="group flex-1 flex flex-col items-center mt-14 md:mt-0 transition-all duration-300 hover:scale-105">
          <div className="w-24 h-24 flex items-center justify-center rounded-full mb-5
            border-4 border-[#fa9404] text-[#fa9404] bg-white shadow-xl 
            transition-all duration-300 group-hover:bg-[#fa9404] group-hover:text-white">
            <FaRegMoneyBillAlt size={34} />
          </div>

          <h3 className="text-lg font-semibold mb-2">Select Package</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Select from our tailored accounting solutions designed to fit your business.
          </p>
        </div>

        {/* Step 3 */}
        <div className="group flex-1 flex flex-col items-center mt-14 md:mt-0 transition-all duration-300 hover:scale-105">
          <div className="w-24 h-24 flex items-center justify-center rounded-full mb-5 
             bg-[#fa9404] text-white shadow-xl transition-all duration-300 
             group-hover:bg-white group-hover:text-[#fa9404] group-hover:border-2 group-hover:border-[#fa9404]">
            <FaRegUserCircle size={34} />
          </div>

          <h3 className="text-lg font-semibold mb-2">Get Service</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Our team delivers accurate, timely services to help your business thrive.
          </p>
        </div>

      </div>
    </section>
  );
}
