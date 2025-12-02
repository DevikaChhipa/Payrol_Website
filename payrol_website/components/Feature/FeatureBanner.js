"use client";


import { motion } from "framer-motion";

export default function Featuresbanner() {
    return (
        <section
            className="relative w-full h-[60vh] md:h-[70vh] -mt-30 bg-cover bg-center bg-no-repeat flex items-end"
            style={{ backgroundImage: "url('/manage/manage-banner.jpg')" }}>

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative w-full px-6 md:px-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Payroll <span className="text-[#fa9404]">Features</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                            We are committed to delivering exceptional quality, modern
                            solutions, and seamless user experience.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

    );
}
