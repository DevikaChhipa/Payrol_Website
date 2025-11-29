// components/AboutSection.js
import Image from "next/image";

function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[11px]">
        ✓
      </span>
      {children}
    </div>
  );
}

function FeatureCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7fafc]">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-[#f5f7fb] py-16">
      <div className="mx-auto flex flex-col gap-12 px-20 lg:flex-row lg:items-center">
        {/* LEFT images */}
        <div className="relative flex-1">
          <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-md lg:h-80">
            <Image
              src="/about/main-team.jpg"
              alt="Team discussing finances"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-10 left-10 h-52 w-72 rounded-2xl overflow-hidden shadow-xl border border-white lg:h-56 lg:w-80">
            <Image
              src="/about/office-person.jpg"
              alt="Professional at desk"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CENTER text */}
        <div className="flex-1 pt-12 lg:pt-0">
          <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
            About us
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-snug text-slate-900 md:text-4xl">
            With a global reach our firm has been in business since 1998.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Our mission is to provide exceptional Accounting, Taxation &amp;
            Payroll Processing Services to businesses and individuals, helping
            them achieve financial clarity and growth.
          </p>

          <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 transition">
            Discover More
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-xs">
              →
            </span>
          </button>

          <div className="mt-10 flex flex-wrap gap-6">
            <Badge>Tax relief/refund claims</Badge>
            <Badge>First‑time filers</Badge>
            <Badge>Couriers, riders or drivers</Badge>
          </div>
        </div>

        {/* RIGHT feature list */}
        <div className="flex-1 space-y-4">
          <FeatureCard
            icon="/icons/payroll.svg"
            title="Payroll processing services"
            subtitle="Accurate and timely payroll for your teams."
          />
          <FeatureCard
            icon="/icons/expertise.svg"
            title="We provide expertise you can trust"
            subtitle="Experienced professionals for complex cases."
          />
          <FeatureCard
            icon="/icons/finance.svg"
            title="Business financial planning"
            subtitle="Strategic planning for long‑term growth."
          />
        </div>
      </div>
    </section>
  );
}
