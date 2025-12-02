import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Cta() {
    return (
        <>
            <section
                className="bg-[#ecf0f4] py-6 px-10 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/Home/cta-bg.webp')" }}
            >
                <div className="absolute inset-0 bg-black/20" />

                <div className="max-w-6xl mx-auto flex items-center gap-16 relative z-50">
                    <div className="flex-1 max-w-2xl">
                        <Image
                            src="/Home/chart.png"
                            alt="chart"
                            width={300}
                            height={300}
                            className="mb-10"
                        />
                        <h2 className="text-[55px] font-bold text-white">
                            We make the creative solutions for business!
                        </h2>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <Link href="#contact" className="group relative inline-flex h-13 items-center overflow-hidden rounded-md bg-yellow-400 px-6 text-[15px] font-semibold text-white">
                            <span
                                className="flex items-center gap-2 transition-all duration-700 ease-out
                                       group-hover:translate-x-full group-hover:opacity-0"
                            >
                                <span>Free consultation</span>
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
                                <span>Free consultation</span>
                            </span>
                        </Link>

                    </div>
                </div>
                <hr className="w-full mt-14 mb-5 border-white px-34"/>
                <p className="text-white text-[20px] text-center relative z-50 font-bold">Let’s make something great work together. <Link href={"/contact"} className="">Contact us now</Link></p>
            </section>
        </>
    );
}
