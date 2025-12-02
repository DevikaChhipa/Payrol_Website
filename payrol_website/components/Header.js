import Link from 'next/link'
import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
    return (
        <>
            <section className="relative  text-white overflow-hidden">
                {/* Top info bar */}
                <div className="w-full bg-[#16222d] text-sm py-5 px-12 ">
                    <div className=" mx-auto flex items-center justify-between gap-4 px-4 py-2">
                        <p className="opacity-80">
                            Smart payroll experts ready to help you!
                        </p>
                        <button className="underline hover:text-yellow-400">
                            Contact now
                        </button>
                    </div>
                </div>
                {/* Navbar */}
                <header className="flex items-center relative z-50 border-b border-t-none py-8 border-slate-200/80 justify-between gap-6 px-12 ">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center  font-bold">
                            P
                        </div>
                        <span className="text-xl font-semibold tracking-tight">
                            PayFlow
                        </span>
                    </div>

                    {/* Center nav links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
                        <Link href="#home" className="text-yellow-400 font-semiboldtext-[14px]">
                            Home
                        </Link>
                        <Link href="/About" className="hover:text-yellow-300 text-[14px]">
                            About
                        </Link>
                        <Link href="/management" className="hover:text-yellow-300 text-[14px]">
                            Payroll Management
                        </Link>
                        <Link href="/feature" className="hover:text-yellow-300 text-[14px]">
                           Features
                        </Link>
                        <Link href="/contact" className="hover:text-yellow-300 text-[14px]">
                            Contact
                        </Link>
                    </nav>

                    {/* Right info / CTA */}
                    <div className="flex items-center gap-4">
                        <div className="hidden group sm:flex items-center  border-r-2 border-slate-400 pr-4 gap-2 text-xs">
                            <div className="w-12 h-12 rounded-full border group-hover:bg-yellow-400 border-yellow-400 transition-all flex items-center justify-center">
                                <IoCallOutline size={20} />
                            </div>
                            <div className="leading-tight">
                                <p className="opacity-70 mb-1 text-[15px]">Need to talk</p>
                                <p className="font-semibold  text-[15px]">(+91) 98765 43210</p>
                            </div>
                        </div>
                        <Link href="#contact" className="group relative inline-flex h-13 items-center overflow-hidden rounded-md bg-yellow-400 px-6 text-[15px] font-semibold text-white">
                          <span
                            className="flex items-center gap-2 transition-all duration-700 justify-center ease-out
                                       group-hover:translate-x-full group-hover:opacity-0"
                          >
                            <span>Get In Touch</span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                              <FaArrowRight className="text-sm" />
                            </span>
                          </span>

                          <span
                            className="absolute inset-0 flex items-center gap-2 -translate-x-full opacity-0 px-6 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                              <FaArrowRight className="text-sm" />
                            </span>
                            <span>Get In Touch</span>
                          </span>
                        </Link>
                    </div>
                </header>
            </section>
        </>
    )
}
