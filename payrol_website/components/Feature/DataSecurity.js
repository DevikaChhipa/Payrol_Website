"use client";

export default function FeatureData() {
  return (
    <section className="bg-[#060E23] py-20 px-6 md:px-16">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
           DATA SECURITY
          </span>

        <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white mt-3">
          Discover Why Organizations Trust Us To Handle Their{" "}
          <span className="text-[#fa9404]">
            Most Critical.
          </span>
        </h2>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src="/manage/datasecurity.webp"
            alt="Security Lock"
            className="rounded-2xl w-full object-cover"
          />
        </div>

        {/* RIGHT GRID */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD 1 — Gradient */}
          <div className="rounded-2xl p-7 text-white bg-gradient-to-r from-[#fa9404] to-[#fa9404] shadow-xl">
            <h3 className="text-lg font-semibold leading-snug">
              24/7 Threat Detection And Rapid Incident Response
            </h3>
            <p className="text-sm mt-2 text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl p-7 bg-white/10 backdrop-blur-lg text-white shadow-xl">
            <h3 className="text-lg font-semibold leading-snug">
              Customized Data Protection Plans For Every Client
            </h3>
            <p className="text-sm mt-2 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl p-7 bg-white/10 backdrop-blur-lg text-white shadow-xl">
            <h3 className="text-lg font-semibold leading-snug">
              Transparent Reporting With Zero Hidden Fees
            </h3>
            <p className="text-sm mt-2 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl p-7 bg-white/10 backdrop-blur-lg text-white shadow-xl">
            <h3 className="text-lg font-semibold leading-snug">
              Experienced Engineers With Top Security Certifications
            </h3>
            <p className="text-sm mt-2 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
