"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  
     const cards = [
    {
      icon: <MdEmail className="text-[#fa9404] w-10 h-10" />,
      title: "reply@example.com",
      desc: "Provides speed, cost-effectiveness, and the ability to easily send files.",
    },
    {
      icon: <FaPhoneAlt className="text-[#fa9404] w-10 h-10" />,
      title: "+0123-895-4732",
      desc: (
        <>
          Mon to Sat: 09:00am to 05:00pm <br />
          Sunday: 09:00am to 12:00pm
        </>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-[#fa9404] w-10 h-10" />,
      title: "Location",
      desc: (
        <>
          8502 Preston Rd. Inglewood, Maine 9838086, <br />
          Hoofddorp Noord-2132
        </>
      ),
    },
  ];


  return (
 <section className="py-20 max-w-7xl mx-auto">
     <span className="bg-white px-4 py-2 rounded-md text-gray-700 font-medium shadow-sm">
            CONTACT US
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 leading-tight">
            Get support from our team.
          </h2>
      <div className=" grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/contact/contact-img.jpg"      // replace with your actual image path
            alt="Support team"
            className="w-full max-w-md object-cover rounded-xl border-l-4 border-t-4 border-[#fa9404]"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
        
         

          {/* Form Card */}
          <div className=" py-8 mt-8">

            {/* MESSAGE BOX */}
            <textarea
              placeholder="Message"
              className="bg-white w-full h-32 p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>

            {/* NAME & PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="bg-white w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number *"
                maxLength={10}
                inputMode="numeric"
                onChange={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                className="bg-white w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address *"
              className="bg-white w-full p-3 rounded-md border border-gray-300 mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {/* CHECKBOX */}
            <label className="flex items-start gap-2 mt-4 text-gray-600 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span>
                Save my name, email, and website in this browser for the next time I comment.
              </span>
            </label>



 <Link href="#contact" className="group mt-10 relative inline-flex h-13 items-center overflow-hidden rounded-sm bg-[#16222d] hover:bg-yellow-400 px-6 text-[15px] font-semibold text-white">
                <span
                  className="flex items-center gap-2 transition-all duration-700 ease-out
                                       group-hover:translate-x-full group-hover:opacity-0"
                >
                  <span>Send Message</span>
                <span className="bg-white text-black rounded-full py-1 px-2">
                ➤
              </span>
                </span>

                <span
                  className="absolute inset-0 flex items-center gap-2 -translate-x-full opacity-0
                                       px-6 transition-all duration-700 ease-out
                                       group-hover:translate-x-0 group-hover:opacity-100"
                >
                
                  <span>Send Message</span>
                    <span className="bg-white text-black rounded-full py-1 px-2">
                ➤
              </span>
                </span>
              </Link>
          </div>
        </div>
      </div>
       <div className="grid md:grid-cols-3 gap-8 px-6 py-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="group bg-white rounded-xl p-7 shadow-lg hover:shadow-lg transition-all duration-300"
        >
          {/* Icon flip animation */}
          <div className="transition-transform duration-500 transform ">
            {card.icon}
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6">
            {card.title}
          </h3>

          <p className="text-gray-600 mt-4 leading-relaxed">{card.desc}</p>

         
        </div>
      ))}
    </div>
    </section>
  );
}
