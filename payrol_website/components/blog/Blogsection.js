"use client";

import Image from "next/image";
export default function BlogSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-md">
            FRESH NEWS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Articles & blog posts with <br /> useful information
          </h2>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT 2 BIG CARDS */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="relative">
              <Image
                src="/about/business2.jpg"
                width={100}
                height={100}
                alt="image"
                className="w-full h-72 object-cover"
              />
              <span className="absolute top-4 right-4 bg-[#fa9404] text-white text-xs font-bold px-3 py-1 rounded-full">
                ECONOMY
              </span>
            </div>

            <div className="p-6">
              <p className="text-xs text-gray-500 font-medium">
                MARCH 26, 2025 • BY GUDFIN
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-2 leading-snug">
                Making innovative strategies for outstanding.
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="relative">
              <Image
                src="/about/business3.jpg"
                width={100}
                height={100}
                alt="image"
                className="w-full h-72 object-cover"
              />
              <span className="absolute top-4 right-4 bg-[#fa9404] text-white text-xs font-bold px-3 py-1 rounded-full">
                INSURANCE
              </span>
            </div>

            <div className="p-6">
              <p className="text-xs text-gray-500 font-medium">
                MARCH 26, 2025 • BY GUDFIN
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-2 leading-snug">
                The other roles of financial advisor?
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE SMALL LIST */}
        <div className="flex flex-col gap-8">
          {/* Small blog item */}
          <div className="flex items-start gap-4">
            <Image
              src="/about/vision.png"
              width={100}
                height={100}
                alt="image"
              className="w-28 h-20 object-cover rounded-xl"
            />
            <div>
              <p className="text-xs text-gray-500 font-medium">
                MARCH 26, 2025 • BY GUDFIN
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">
                How to use the investment growth calculator
              </h4>
            </div>
          </div>

          {/* Small blog item */}
          <div className="flex items-start gap-4">
            <Image
              src="/about/why-img1.jpg"
              width={100}
                height={100}
                alt="image"
              className="w-28 h-20 object-cover rounded-xl"
            />
            <div>
              <p className="text-xs text-gray-500 font-medium">
                MARCH 26, 2025 • BY GUDFIN
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">
                Consider when buying investment property
              </h4>
            </div>
          </div>

          {/* Small blog item */}
          <div className="flex items-start gap-4">
            <Image
              src="/about/why-img2.jpg"
              width={100}
                height={100}
                alt="image"
              className="w-28 h-20 object-cover rounded-xl"
            />
            <div>
              <p className="text-xs text-gray-500 font-medium">
                MARCH 26, 2025 • BY GUDFIN
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">
                What are the hidden fees of crypto/NFTs?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
