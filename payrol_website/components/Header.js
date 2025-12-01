"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative text-white overflow-hidden">
      {/* Top info bar */}
      <div className="w-full bg-[#16222d] text-sm py-5 px-4 md:py-5 md:px-12 relative z-50">
        <div className="mx-auto flex items-center justify-between gap-4">
          <p className="opacity-80 text-xs md:text-sm">
            Smart payroll experts ready to help you!
          </p>
          <button className="underline hover:text-yellow-400 text-xs md:text-sm">
            Contact now
          </button>
        </div>
      </div>

      {/* Navbar */}
      <header className="flex items-center relative z-40 lg:border-b lg:border-slate-200/80 py-4 md:py-8 justify-between gap-4 px-4 md:px-12 lg:bg-transparent md:bg-[#0d1821]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">
            P
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            PayFlow
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
          <Link href="/" className="text-yellow-400 font-semibold text-[14px]">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300 text-[14px]">
            About
          </Link>
          <Link href="/Payroll" className="hover:text-yellow-300 text-[14px]">
            Payroll Management
          </Link>
          <Link href="/Features" className="hover:text-yellow-300 text-[14px]">
            Features
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 text-[14px]">
            Contact
          </Link>
        </nav>

        {/* Right info / CTA (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="group flex items-center border-r-2 border-slate-400 pr-4 gap-2 text-xs">
            <div className="w-12 h-12 rounded-full border group-hover:bg-yellow-400 border-yellow-400 transition-all flex items-center justify-center">
              <IoCallOutline size={20} />
            </div>
            <div className="leading-tight">
              <p className="opacity-70 mb-1 text-[15px]">Need to talk</p>
              <p className="font-semibold text-[15px]">(+91) 12345 67891</p>
            </div>
          </div>

          <Link
            href="#contact"
            className="group relative inline-flex h-11 items-center overflow-hidden rounded-md bg-yellow-400 px-5 text-[15px] font-semibold text-white"
          >
            <span
              className="flex items-center gap-2 transition-all duration-700 justify-center
                     group-hover:translate-x-full group-hover:opacity-0"
            >
              <span>Get In Touch</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <FaArrowRight className="text-sm" />
              </span>
            </span>

            <span
              className="absolute inset-0 flex items-center gap-2 -translate-x-full opacity-0 px-6
                     transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <FaArrowRight className="text-sm" />
              </span>
              <span>Get In Touch</span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-[2px] w-5 bg-white transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </header>

      {/* Mobile full-screen menu: flips down from top */}
      <div
        className={`fixed inset-0 z-30 bg-[#0d1821] text-white transform transition-transform duration-500 origin-top
        md:hidden ${open ? "translate-y-0 top-30.5" : "-translate-y-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <span className="text-lg font-semibold">Menu</span>
          {/* <button
            onClick={() => setOpen(false)}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-white/40 text-xl"
            aria-label="Close menu"
          >
            ×
          </button> */}
        </div>

        <div className="flex flex-col gap-6 px-6 pt-8 text-base uppercase tracking-wide">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/Payroll" onClick={() => setOpen(false)}>
            Payroll Management
          </Link>
          <Link href="/Features" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <div className="mt-6 border-t border-white/10 pt-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center">
                <IoCallOutline size={18} />
              </div>
              <div>
                <p className="text-xs opacity-70">Need to talk</p>
                <p className="font-semibold text-sm">(+91) 98765 43210</p>
              </div>
            </div>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
