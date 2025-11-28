import Link from 'next/link'
import React from 'react'

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
                    <header className="flex items-center border-b border-t-none py-8 border-slate-200/80 justify-between gap-6 px-12 relative z-10">
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
                            <Link href="#home" className="text-yellow-400 font-semibold">
                                Home
                            </Link>
                            <Link href="#features" className="hover:text-yellow-300 ">
                                Features
                            </Link>
                            <Link href="#benefits" className="hover:text-yellow-300 ">
                                Benefits
                            </Link>
                            <Link href="#pricing" className="hover:text-yellow-300 ">
                                Pricing
                            </Link>
                            <Link href="#contact" className="hover:text-yellow-300 ">
                                Contact
                            </Link>
                        </nav>

                        {/* Right info / CTA */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-2 text-xs">
                                <div className="w-9 h-9 rounded-full border border-yellow-400 flex items-center justify-center">
                                    📞
                                </div>
                                <div className="leading-tight">
                                    <p className="opacity-70 ">Need to talk</p>
                                    <p className="font-semibold ">(+91) 98765 43210</p>
                                </div>
                            </div>
                            <button className="hidden md:inline-flex items-center gap-2 bg-yellow-400  px-5 py-2 rounded-md font-semibold text-sm hover:bg-yellow-300 transition">
                                Get In Touch
                                <span>→</span>
                            </button>
                        </div>
                    </header>
                </section>
        </>
    )
}
