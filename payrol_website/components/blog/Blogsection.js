"use client";

import Image from "next/image";

export default function BlogSection() {
  // LEFT BIG BLOGS (WITH OVERLAY)
  const bigBlogs = [
    {
      img: "/about/business2.jpg",
      tag: "ECONOMY",
      date: "MARCH 26, 2025",
      user: "GUDFIN",
      title: "Making innovative strategies for outstanding.",
    },
    {
      img: "/about/business3.jpg",
      tag: "INSURANCE",
      date: "MARCH 26, 2025",
      user: "PAYROLL",
      title: "The other roles of financial advisor?",
    },
    {
      img: "/about/business3.jpg",
      tag: "INSURANCE",
      date: "MARCH 26, 2025",
      user: "Muffin",
      title: "The other roles of financial advisor?",
    },
  ];

  // RIGHT SMALL BLOGS
  const smallBlogs = [
    {
      img: "/about/vision.png",
      date: "MARCH 26, 2025",
      user: "GUDFIN",
      title: "How to use the investment growth calculator",
    },
    {
      img: "/about/why-img1.jpg",
      date: "MARCH 26, 2025",
      user: "KINWA",
      title: "Consider when buying investment property",
    },
    {
      img: "/about/why-img2.jpg",
      date: "MARCH 26, 2025",
      user: "MUFFIN",
      title: "What are the hidden fees of crypto/NFTs?",
    },
    {
      img: "/about/why-img1.jpg",
      date: "MARCH 26, 2025",
      user: "GUDFIN",
      title: "Consider when buying investment property",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-md">
            LATEST BLOGS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Articles & blog posts with <br /> useful information
          </h2>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE BIG BLOG CARDS */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {bigBlogs.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-visible pb-16 group"
            >
              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-full h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />

                {/* TAG */}
                <span className="absolute top-4 right-4 bg-[#fa9404] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* OVERLAY CONTENT */}
              <div
                className="
                  absolute 
                  left-1/2 
                  -translate-x-1/2
                  bottom-0
                  w-[85%] 
                  bg-white 
                  rounded-xl 
                  p-5 
                  shadow-lg
                "
              >
                {/* DATE + USER */}
                <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
                  {item.date} <span className="font-semibold">• BY {item.user}</span>
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-2 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE SMALL BLOGS */}
        <div className="flex flex-col gap-8">
          {smallBlogs.map((item, index) => (
            <div key={index} className="flex items-start group">
              <div className="flex gap-4 group-hover:bg-[#fa9404]/10 rounded-lg p-3">
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-28 h-20 object-cover rounded-xl"
                />

                <div>
                  {/* DATE + USER */}
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
                    {item.date} <span className="font-semibold">• BY {item.user}</span>
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
