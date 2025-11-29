"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <section className="relative overflow-hidden -mt-30 bg-cover bg-center bg-no-repeat py-24 px-6 md:px-16"
  style={{ backgroundImage: "url('about/banner-bg.jpg')" }}>
    <div className="absolute inset-0 bg-black/60"></div>

      {/* Soft floating circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#ffdfb2] rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ffe1c2] rounded-full opacity-30 blur-3xl animate-ping"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl md:mt-30 font-bold text-gray-200 leading-tight">
            About <span className="text-[#fa9404]">Us</span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg md:text-xl leading-relaxed">
            We are committed to delivering exceptional quality, modern solutions,
            and seamless user experience.
          </p>

          {/* Animated Buttons */}
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >


            <Link href="/contact" className="px-6 py-3 border border-[#fa9404] text-[#fa9404] rounded-xl hover:bg-[#fa9404] hover:text-white transition-all duration-300">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE / ARTWORK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

        </motion.div>

      </div>
    </section>
  );
}
