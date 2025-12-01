"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const slides = [
    {
        image: "/Home/hero.jpg",
        title: (
            <>
                Payroll that keeps <span className="text-yellow-400">people</span> and{" "}
                <span className="text-yellow-400">profits</span> aligned.
            </>
        ),
        subtitle:
            "Automate salaries, compliance, and payouts in one secure platform designed for growing businesses.",
    },
    {
        image: "/Home/HomeBanner.jpg",
        title: (
            <>
                Error-free <span className="text-yellow-400">salary</span> processing.
            </>
        ),
        subtitle: "Cut down manual work and ensure every payout is on time.",
    },
    {
        image: "/Home/HomeBanner2.jpg",
        title: (
            <>
                Smart <span className="text-yellow-400">compliance</span> automation.
            </>
        ),
        subtitle: "Keep up with regulations without extra effort.",
    },
];

export default function FullscreenHeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(
            () => setIndex((prev) => (prev + 1) % slides.length),
            5000
        );
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative -mt-30 h-[92vh] w-full overflow-hidden bg-slate-800 text-white">
            {/* background slides */}
            <div className="absolute inset-0">
                {slides.map((slide, i) => (
                    <div
                        key={slide.image}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* content */}
            <div className="relative z-10 flex h-full items-center px-8 md:px-16">
                <div className="max-w-2xl">
                    <div key={index} className="animate-slideUpFade hero-slide-up ">
                        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-yellow-300">
                            Your payroll, our precision
                        </p>
                        <h1 className="mb-10 text-[50px] font-bold md:text-5xl ">
                            {slides[index].title}
                        </h1>
                        <p className="mb-8 text-sm text-slate-100 md:text-base">
                            {slides[index].subtitle}
                        </p>
                        <div className="flex gap-4">
                            <Link href="#contact" className="group relative inline-flex h-13 items-center overflow-hidden rounded-md bg-yellow-400 px-6 text-[15px] font-semibold text-white">
                                <span
                                    className="flex items-center gap-2 transition-all duration-700 ease-out
                                       group-hover:translate-x-full group-hover:opacity-0"
                                >
                                    <span>Request Demo</span>
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
                                    <span>Request Demo</span>
                                </span>
                            </Link>
                            <button className="rounded-md border border-slate-200 px-6 py-2.5 text-sm transition hover:border-yellow-300 hover:text-yellow-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* indicators */}
            {/* vertical step indicators (01 / 02 / 03) */}
            <div className="absolute right-6 top-1/2 z-10 -translate-y-1/2 flex flex-col items-center gap-4">
                {slides.map((_, i) => {
                    const active = i === index;
                    return (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={
                                active
                                    ? "flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/90 text-white text-base shadow-lg"
                                    : "text-white/80 text-sm"
                            }
                        >
                            {String(i + 1).padStart(2, "0")}
                        </button>
                    );
                })}
            </div>

        </section>
    );
}
