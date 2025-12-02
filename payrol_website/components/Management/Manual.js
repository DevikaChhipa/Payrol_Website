"use client";
import Image from "next/image";

export default function ComparisonSection() {
  return (
    <section className="relative w-full py-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/manage/manual-img1.jpg"     // change your BG image
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        <h2 className="text-[#fa9404] text-3xl md:text-4xl font-bold text-center mb-12">
          Manual vs Automated Payroll
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20">
            <div className="w-full h-52 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src="/manage/manual.jpg"     // change left comparison image
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Manual Payroll</h3>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>✔ We put strong focus on the needs of your business to figure out solutions.</li>
              <li>✔ We put strong focus on the needs of your business to figure out solutions.</li>
              <li>✔ We put strong focus on the needs of your business to figure out solutions.</li>
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20">
            <div className="w-full h-52 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src="/manage/automated.jpg"     // change right comparison image
                alt=""
                fill
                className="object-cover border-t-4 border-r-4 border-[#fa9404] rounded-tr-xl"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Automated Payroll</h3>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>✔ We put strong focus on the needs of your business to figure out solutions.</li>
              <li>✔ We put strong focus on the needs of your business to figure out solutions.</li>
              <li>✔ We put strong focus on the needs of your business to figure out solutions.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
