"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function SalaryCalculation() {
  return (
    <section className="bg-[#0e1924] text-white py-20 px-6 md:px-16">
      {/* Top Label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 mb-6"
      >
    
        <span className="bg-white text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
            Salary Calculation Automation
          </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE IMAGES */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/feature/fea-img2.jpg"
              alt="smart home"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/about/team2.jpg"
              alt="home interior"
              width={500}
              height={400}
              className="object-cover w-75 h-full"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Empowering Modern Living Through Smart, Seamless,
            <span className="block text-[#fa9404]">
              Sophisticated Home Automation
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            luctus eros nec sem sagittis, non faucibus arcu euismod. Sed varius
            lacus malesuada mauris gravida eros augue in metus.
          </p>

          {/* Bullet points */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-3 mb-8 text-sm text-gray-300"
          >
            {[
              "Curabitur ac neque in nulla rhoncus consequat",
              "Urna sed venenatis posuere tortor dui",
              "Eget posuere lacus arcu et nisl viverra enim",
              "Suspendisse ut lorem nec purus feugiat",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-3"
              >
                <span className="text-[#fa9404] text-lg">✔</span>
                <p>{item}</p>
              </motion.li>
            ))}
          </motion.ul>

           <Link href="/contact" className="group mt-2 relative inline-flex h-13 items-center overflow-hidden rounded-sm bg-[#16222d] hover:bg-yellow-400 px-6 text-[15px] font-semibold text-white">
                <span
                  className="flex items-center gap-2 transition-all duration-700 ease-out
                                       group-hover:translate-x-full group-hover:opacity-0"
                >
                  <span>Get in Touch</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <FaArrowRight className="text-sm" />
                  </span>
                </span>

                <span
                  className="absolute inset-0 flex items-center gap-2 -translate-x-full opacity-0
                                       px-6 transition-all duration-700 ease-out
                                       group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <FaArrowRight className="text-sm" />
                  </span>
                  <span>Get in Touch</span>
                </span>
              </Link>
        </motion.div>
      </div>
    </section>
  );
}
