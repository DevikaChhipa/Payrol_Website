import Image from "next/image";

export default function MainSection() {
  return (
    <section className="bg-[#fa9404]/10 py-20 px-6 md:px-16">

      <span className="bg-white text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
        WHAT IS PAYROLL MANAGEMENT
      </span>

      <div className="flex flex-col lg:flex-row justify-between gap-16 md:mt-10 mt-5">

        <div className="flex-1">
          <p className="text-sm font-semibold text-[#fa9404]">ABOUT PAYROLL</p>
          <h2 className="text-4xl font-bold text-[#0e1924] mt-2">
            Smart, Accurate & Automated Payroll Processing
          </h2>

          <p className="text-sm font-semibold text-[#fa9404] mt-8">OUR PURPOSE</p>
          <h3 className="text-xl font-bold text-[#0e1924] mt-1">
            Simplifying Payroll for Modern Businesses
          </h3>
          <p className="text-gray-700 mt-3 max-w-md">
            Zenpay’s payroll system helps organizations automate salary
            calculations, statutory compliance, reimbursements, and employee
            payouts with precision and real-time accuracy.
          </p>
        </div>

        <div className="flex-1">
          <p className="text-sm font-semibold text-[#fa9404]">
            WHY CHOOSE ZENPAY
          </p>
          <h3 className="text-xl font-bold text-[#0e1924] mt-2">
            A Seamless, Error-Free Payroll Experience
          </h3>
          <p className="text-gray-700 mt-3 max-w-md">
            From onboarding to salary processing and compliance filing, Zenpay
            empowers HR teams with automation, accuracy, and reliable
            end-to-end payroll management.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[260px] h-[260px]">

            <Image
              src="/manage/main-img1.jpg" 
              alt="Payroll Software Dashboard"
              width={260}
              height={260}
              className="rounded-xl shadow-xl opacity-90 border-t-4 border-r-4 border-orange-500"
            />
            <Image
              src="/manage/main-img2.jpg" 
              alt="Payroll Processing"
              width={180}
              height={180}
              className="rounded-xl shadow-xl absolute -left-10 -top-10 border-t-4 border-r-4 border-orange-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
