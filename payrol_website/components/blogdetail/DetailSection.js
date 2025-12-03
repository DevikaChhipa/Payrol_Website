"use client";

import Image from "next/image";
import { PiCalendarBlankLight } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import { PiTagLight } from "react-icons/pi";
import { PiChatCircleLight } from "react-icons/pi";

export default function BlogDetailSection() {

    const blogMeta = [
  {
    icon: <PiCalendarBlankLight size={20} className="text-[#fa9404]" />,
    label: "March 26, 2025",
  },
  {
    icon: <PiUserLight size={20} className="text-[#fa9404]" />,
    label: "by Gudfin",
  },
  {
    icon: <PiTagLight size={20} className="text-[#fa9404]" />,
    label: "Economy",
  },
  {
    icon: <PiChatCircleLight size={20} className="text-[#fa9404]" />,
    label: "3 Comments",
  },
];



  return (
    <section className="py-20 px-6 md:px-16 bg-[#ecf0f4]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2">
          <Image
            src="/about/business2.jpg"
            width={900}
            height={500}
            alt="Blog Image"
            className="w-full h-[450px] rounded-2xl object-cover"
          />

      
        <div className="mt-6 bg-white rounded-xl p-5 flex flex-wrap gap-8 text-gray-700">

  {blogMeta.map((item, index) => (
    <div key={index} className="flex items-center gap-2 text-sm">
      {item.icon}
      <span>{item.label}</span>
    </div>
  ))}

</div>

          <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Accounting is the process of recording financial transactions pertaining 
              to a business or other large organization. The account process include 
              summarizing, analyzing, and reporting these transactions.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              1. Tax planning and compliance
            </h3>
            <p>
              Tax planning is crucial in minimizing, ensuring financial stability, 
              and achieving long-term financial goals.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              2. Data collection and analysis
            </h3>
            <p>
              Involves gathering information from various sources while data analysis 
              focuses on interpreting and making sense.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              3. Financial statement preparation
            </h3>
            <p>
              Financial statements are formal records of business’s financial activity 
              and position, providing key insights.
            </p>

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-10">

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Image
              src="/about/business3.jpg"
              width={120}
              height={120}
              alt="Author"
              className="rounded-full mx-auto h-28 w-28 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-900">
              Dr. Jacob Moore
            </h3>
            <p className="text-sm text-[#fa9404] mt-1">Author of Blog</p>

        
          </div>

       
          {/* <div className="bg-white rounded-xl shadow-md">
            <div className="bg-[#14212A] text-white px-6 py-4 rounded-t-xl font-semibold">
              ✱ CATEGORIES
            </div>

            <div className="divide-y">
              {[
                { name: "Business", count: 2 },
                { name: "Economy", count: 1 },
                { name: "Finance", count: 1 },
                { name: "Insurance", count: 2 },
                { name: "Investment", count: 2 },
                { name: "Research", count: 1 },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex justify-between px-6 py-4 text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  <span>{c.name}</span>
                  <span>({c.count})</span>
                </div>
              ))}
            </div>
          </div> */}

   
          <div className="bg-white rounded-xl shadow-md">
            <div className="bg-[#0E1924] text-white px-6 py-4 rounded-t-xl font-semibold">
               RECENT POSTS
            </div>

            <div className="space-y-6 p-6">
              {[
                {
                  img: "/about/business2.jpg",
                  title: "Making Innovative Strategies For Outstanding.",
                },
                {
                  img: "/about/business3.jpg",
                  title: "The Other Roles Of Financial Advisor",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    src={item.img}
                    width={80}
                    height={80}
                    alt="post"
                    className="rounded-xl h-20 w-20 object-cover"
                  />
                  <div>
                    <span className="bg-[#fa9404] text-white text-xs px-3 py-1 rounded-md">
                      March 26, 2025
                    </span>
                    <p className="mt-2 text-gray-900 font-semibold text-sm leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
