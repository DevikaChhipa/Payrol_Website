"use client";


import { motion } from "framer-motion";

export default function BlogDetailbanner() {
    return (
        <section
            className="relative w-full h-[60vh] md:h-[70vh] -mt-32 bg-cover bg-bottom bg-no-repeat flex items-end"
            style={{ backgroundImage: "url('/blog/blogdetailbanner.jpg')" }}>

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
                            Blog <span className="text-[#fa9404]">Detail</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                       
                    </motion.div>
                </div>
            </div>
        </section>

    );
}
