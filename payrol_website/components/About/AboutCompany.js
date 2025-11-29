"use client";

export default function CompanyStory() {
  return (
    <section className="bg-[#F5F8FA] py-20 md:pt-20 md:pb-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGES */}
        <div className="relative">
          {/* Top Image */}
          <img
            src="/about/team2.jpg"
            alt="team"
            className="w-[420px] rounded-xl shadow-md"
          />

          {/* Bottom Image (Overlapping) */}
          <img
            src="/about/team1.jpg"
            alt="office"
            className="w-[360px] rounded-xl shadow-lg absolute left-34 top-58 border-t-4 border-l-4 border-[#fa9404]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="text-sm font-semibold bg-white px-4 py-1 rounded-full shadow-sm">
            OUR STORY
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Processing Services to businesses and individuals
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our mission is to provide exceptional Accounting, Taxation & Payroll 
            Processing Services to businesses and individuals, helping them achieve.
          </p>

          {/* Call-to-action */}
          <button className="mt-8 px-7 py-4 bg-gray-900 text-white rounded-xl shadow hover:bg-gray-800 transition flex items-center gap-2">
            Discover More <span>→</span>
          </button>

        </div>
      </div>



    </section>
  );
}
