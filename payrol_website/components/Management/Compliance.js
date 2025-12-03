"use client";

import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiPagespeedinsights } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function ComplianceTaxhandling() {
    return (
        <section className="w-full py-20 bg-[#fa9404]/10">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto px-4">
                <span className="bg-white text-gray-900 px-4 py-2 text-sm font-semibold rounded-md">
                    Compliance & Tax Handling
                </span>
                <p className="text-gray-600 mt-4 text-lg">
                    Payroll offers accurate, compliant, and automated payroll services, saving you time and ensuring your employees.
                </p>
            </div>
       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

            
                <div className="bg-gray-50 rounded-lg shadow-md p-8 text-center border border-gray-200">
                    <div className="flex justify-center mb-4">
                      <FaMoneyBillTrendUp className="text-5xl text-[#fa9404]" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">Affordable</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Our Business Specialists will form your new business the correct way,
                        saving you time and money by avoiding costly errors.
                    </p>
                </div>

           
               <div className="relative group">


  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#fa9404] 
                   rounded-full group-hover:w-full transition-all duration-500"></span>

  <div className="bg-white rounded-lg shadow-xl p-8 text-center border border-gray-200
                  md:-mt-10 md:shadow-2xl md:scale-[1.05] transition-all relative z-10">

    <div className="flex justify-center mb-4">
      <SiPagespeedinsights className="text-5xl" />
    </div>

    <h3 className="text-xl font-semibold mb-3 text-[#fa9404]">Fast Processing</h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      When you place your order through us, we immediately start forming your business.
      Our processing times are some of the fastest.
    </p>

  </div>
</div>

                <div className="bg-gray-50 rounded-lg shadow-md p-8 text-center border border-gray-200">
                    <div className="flex justify-center mb-4">
                        <RiCustomerService2Fill  className="text-5xl text-[#fa9404]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Dedicated Agents</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Each customer gets a personal Business Specialist with direct phone & email.
                        Have questions? We're here to help.
                    </p>
                </div>

            </div>
        </section>
    );
}
