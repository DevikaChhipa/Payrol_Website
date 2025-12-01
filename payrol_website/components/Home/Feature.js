import React from "react";

export default function Feature() {
  return (
    <section
      className="relative bg-white bg-cover bg-center px-4 sm:px-8 lg:px-20 pt-16 lg:pt-24 pb-10 lg:pb-14 text-center mx-auto"
      style={{ backgroundImage: "url('/Home/key.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Heading */}
      <div className="relative z-10 heading text-left max-w-6xl mx-auto">
        <h3 className="bg-[#ecab23] text-white px-3 py-2 rounded-sm text-[11px] sm:text-[13px] w-fit mb-3">
          Key Features
        </h3>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-28">
          <p className="text-2xl sm:text-3xl font-semibold text-white capitalize">
            Successful Financial
            <br className="hidden sm:block" />
            {" "}Control Process
          </p>
          <p className="text-white text-sm sm:text-base max-w-xl">
            Stay organized and focused on growth while we handle your day financial
            record. Gravida urna vehicula volutpat velit sed imperdiet.
          </p>
        </div>
      </div>

      {/* Steps + Image */}
      <section className="relative z-10 px-0 lg:px-20 pt-10 lg:pt-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
          {/* Left: Steps */}
          <div className="flex-1 space-y-8">
            {[
              { num: "01", title: "Basic Research", active: true },
              { num: "02", title: "Discovery" },
              { num: "03", title: "Build Plan" },
              { num: "04", title: "Execute" },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                {/* Number + line */}
                <div className="flex flex-col items-center">
                  <span
                    className={`text-lg sm:text-xl font-semibold ${
                      item.active ? "text-[#f5a623]" : "text-white"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span
                    className={`mt-2 h-10 sm:h-16 w-px ${
                      item.active ? "bg-[#f5a623]" : "bg-white/20"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="text-left">
                  <h3
                    className={`text-lg sm:text-xl font-semibold ${
                      item.active ? "text-[#f5a623]" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-300 max-w-md">
                    In ligula libero neque neque nulla neque rutrum. Iaculis quam.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/Home/key1.webp"
                alt="Growth chart"
                className="w-full h-full max-h-72 sm:max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
