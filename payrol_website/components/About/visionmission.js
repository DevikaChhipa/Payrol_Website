"use client";

import { motion } from "framer-motion";
import { Target, EyeIcon } from "lucide-react";
import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#16222d] to-[#16222d] overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-bold text-gray-200 mb-16"
        >
          Our <span className="text-[#fa9404]">Vision & Mission</span>
        </motion.h2>

        <div className="space-y-20">

          {/* VISION SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Vision Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 bg-opacity-70 backdrop-blur-xl shadow-xl rounded-2xl p-10 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#fa9404]/10 rounded-xl">
                  <EyeIcon size={42} className="text-[#fa9404]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-200">Our Vision</h3>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                To become a leading innovator delivering world-class digital solutions
                that transform businesses and create seamless experiences for people everywhere.
              </p>
            </motion.div>

            {/* Right: Vision Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <Image
                src="/about/vision.png"
                alt="Vision"
                width={300}
                height={300}
                className="object-contain w-full h-[320px] border-r-4 border-t-4 border-[#fa9404]"
              />
            </motion.div>
          </div>

          {/* MISSION SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Mission Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/about/mission2.jpg"
                alt="Mission"
                width={600}
                height={400}
                className="object-contain w-full h-[320px] border-l-4 border-b-4 border-[#fa9404]"

              />
            </motion.div>

            {/* Right: Mission Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl shadow-xl rounded-2xl p-10 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#fa9404]/10 rounded-xl">
                  <Target size={42} className="text-[#fa9404]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-200">Our Mission</h3>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                To deliver scalable and user-friendly digital solutions with creativity,
                advanced technology, and customer-first thinking—driving long-term growth
                and meaningful impact.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
