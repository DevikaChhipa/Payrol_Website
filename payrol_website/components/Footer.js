"use client";

import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0E1924] text-white pt-20 pb-5 overflow-hidden">
      <div className="absolute left-0 top-62 opacity-20 pointer-events-none">
        <FaArrowTrendUp className="text-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 relative group">
          <p className="text-[#fa9404] font-semibold tracking-wider text-sm mb-3">
            WANT TO GET ANY SUPPORT?
          </p>

          <h2 className="text-6xl font-bold leading-[1.1]">
            Let’s <br /> Discuss
            <span className="text-[#fa9404]">!</span>
          </h2>

          {/* Phone + rotating circle (hidden by default) */}
          <Link href="/contact"
            className="absolute left-[58%] top-20 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
            <div className="relative w-32 h-32 md:w-40 md:h-30 lg:w-30 lg:h-30">
              {/* FIXED PHONE ICON */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-white text-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg">
                  <FaPhoneAlt className="text-xl md:text-2xl" />
                </div>
              </div>

              {/* ROTATING TEXT CIRCLE */}
              <div className="absolute inset-0 animate-[rotate-circle_8s_linear_infinite]">
                <svg
                  viewBox="0 0 200 200"
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "50%",
                    background: "#fa9404",
                    display: "block",
                  }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    />
                  </defs>

                  <text fontSize="20" fill="#161616" fontFamily="serif" letterSpacing="6px">
                    <textPath href="#circlePath" startOffset="0%">
                      CONTACT • CONTACT • CONTACT •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </Link>
        </div>



        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Main Pages</h3>
         <ul className="space-y-3 text-gray-300">

  <li>
    <Link href="/" className="relative group inline-block hover:text-[#fa9404]">
      Home
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#fa9404] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>

  <li>
    <Link href="/blog" className="relative group inline-block hover:text-[#fa9404]">
      Blog
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#fa9404] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>

  <li>
    <Link href="/" className="relative group inline-block hover:text-[#fa9404]">
      About
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#fa9404] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>

  <li>
    <Link href="/" className="relative group inline-block hover:text-[#fa9404]">
      Blog Page
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#fa9404] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>

  <li>
    <Link href="/" className="relative group inline-block hover:text-[#fa9404]">
      Service Page
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#fa9404] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>

</ul>

        </div>

        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Our Company</h3>
          <ul className="space-y-3 text-gray-300">
             <li>
    <Link href="/" className="relative group inline-block hover:text-[#fa9404]">
      Blog Single
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#fa9404] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>

  <li>
    <Link href="/" className="relative group inline-block hover:text-[#fa9404]">
      Product
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#fa9404] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>

   <li>
    <Link href="/contact" className="relative group inline-block hover:text-[#fa9404]">
      Contact
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#fa9404] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-semibold text-xl mb-4 leading-snug">
            Stay tuned and subscribe <br /> to our newsletter.
          </h3>

          <div className="flex items-center bg-[#12202C] border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 bg-transparent outline-none w-full text-gray-300"
            />
           <Link
  href="/"
  className="bg-[#fa9404] text-black w-10 h-8 flex items-center justify-center 
             rounded-full font-bold mr-2 pb-1"
>
  →
</Link>

          </div>

          <p className="text-xs text-gray-400 mt-3">
            By Subscribing, You Accept Our Privacy Policy
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 border-t border-gray-700 mt-14 pt-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-[#fa9404] text-sm font-semibold mb-1">
              EMAIL US
            </p>
            <p className="text-lg">payroll@infotech.com</p>
          </div>

          <div>
            <p className="text-[#fa9404] text-sm font-semibold mb-1">
              LOCATION
            </p>
            <p className="text-lg">Jagatpura , Jaipur</p>
          </div>

          <div>
            <p className="text-[#fa9404] text-sm font-semibold mb-1">
              CALL US NOW
            </p>
            <p className="text-lg">0141- 1234567</p>
          </div>
          <div>
            <p className="text-[#fa9404] text-sm font-semibold mb-1">
              SOCIAL LINKS
            </p>

            <div className="flex items-center gap-4 text-xl">
              <a href="/" className="hover:text-[#fa9404] transition">
                <FaFacebookF />
              </a>
              <a href="/" className="hover:text-[#fa9404] transition">
                <FaInstagram />
              </a>
              <a href="/" className="hover:text-[#fa9404] transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-10 text-gray-400 text-sm pb-6">
        <p>
          Copyright © {new Date().getFullYear()} Payroll, All Rights Reserved.
        </p>

        <p className="absolute inset-0 top-[-100px] text-[130px] font-bold opacity-20 tracking-widest select-none pointer-events-none text-end">
          Payroll
        </p>
      </div>
      </div>
      



    </footer>
  );
}
