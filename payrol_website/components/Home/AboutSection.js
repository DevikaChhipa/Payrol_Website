
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdCheck } from "react-icons/md";


function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 ">
      <span className="flex p-3 rounded-full bg-white  text-xs font-bold shadow-xl text-[11px]">
        <MdCheck size={20} fill="yellow" className="font-bold" />
      </span>
      {children}
    </div>
  );
}

function FeatureCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center ">
      <div className="flex h-14 w-[64px] items-center justify-center rounded-sm bg-white" style={{ boxShadow: "0 5px 40px 0 rgba(0,0,0,0.10)" }}>
        <Image src={icon} alt={title} width={30} height={30} className="" />
      </div>
      <div>
        <h3 className="text-[14px] font-semibold text-slate-900 ms-5">{title}</h3>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-[#ecf0f4] pb-16 pt-24">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] gap-10 px-6 lg:px-10 mb-10">
        <div className="relative mx-auto max-w-2xl lg:mx-0 lg:block grid grid-cols-1 xs:grid-cols-2 gap-4 lg:gap-0">
          <div className="relative lg:h-[432px] lg:w-[431px] rounded-md overflow-hidden ">
            <Image
              src="/Home/about.png"
              alt="Team discussing finances"
              fill
              className="object-cover relative"
            />
          </div>
          <div className="lg:h-[327px] lg:w-[302px]  rounded-none overflow-hidden shadow-xl lg:absolute md:hidden lg:block  lg:-bottom-14 lg:left-38 lg:rounded-md">
            <Image
              src="/Home/about2.png"
              alt="Professional at desk"
              fill
              className="object-cover relative"
            />
          </div>
        </div>
        <div className="pt-12 lg:pt-0 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10 ml-16 items-center justify-center">
            <div className="w-full lg:max-w-md">
              <span className="inline-block rounded-sm bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
                About us
              </span>

              <h2 className="mt-4 text-[16px] font-bold  text-[#1e3238] md:text-[48px]" style={{lineHeight:"48px"}}>
                With a global reach our firm has been in business since 1998.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Our mission is to provide exceptional Accounting, Taxation & Payroll Processing Services
                to businesses and individuals, helping them achieve financial clarity and growth.
              </p>

              <Link href="#contact" className="group mt-10 relative inline-flex h-13 items-center overflow-hidden rounded-sm bg-[#16222d] hover:bg-yellow-400 px-6 text-[15px] font-semibold text-white">
                <span
                  className="flex items-center gap-2 transition-all duration-700 ease-out
                                       group-hover:translate-x-full group-hover:opacity-0"
                >
                  <span>Discover More</span>
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
                  <span>Discover More</span>
                </span>
              </Link>
            </div>
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
              <FeatureCard icon="/Home/wallet.png" title="Payroll processing services" />
              <FeatureCard icon="/Home/stats-icons.png" title="We provide expertise you can trust" />
              <FeatureCard icon="/Home/cards.png" title="Business financial planning" />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 border-t pt-6 border-[#ccc] ml-16">
            <Badge>Tax relief/refund claims</Badge>
            <Badge>First‑time filers</Badge>
            <Badge>Couriers, riders or drivers</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
