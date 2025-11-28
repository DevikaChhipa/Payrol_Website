"use client";
import React, { useEffect, useState } from "react";

const bgImages = [
  "/Home/HomeBanner1.jpg",
  "/Home/HomeBanner2.jpg",
  "/Home/HomeBanner3.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000); // 4s per slide
    return () => clearInterval(timer);
  }, []);

  const currentBg = bgImages[index];

  return (
    <section
      className="relative -mt-24 min-h-[90vh] px-12 text-white overflow-hidden bg-left bg-cover bg-no-repeat transition-[background-image] duration-700 ease-in-out"
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* content */}
      <div className="relative z-10">
        <h1 className="pt-32 text-4xl font-bold">
          Payroll that keeps <span className="text-yellow-400">people</span> and{" "}
          <span className="text-yellow-400">profits</span> aligned.
        </h1>
      </div>

      {/* small dots controls (optional) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {bgImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-yellow-400" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
