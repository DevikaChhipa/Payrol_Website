import Image from "next/image";

export default function MainSection() {
  return (
    <section className="bg-[#fa9404]/10 py-20 px-6 md:px-16">
          <span className="bg-white text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
            WHAT IS PAYROLL MANAGEMENT
          </span>
      {/* MAIN FLEX ROW */}
      <div className="flex flex-col lg:flex-row  justify-between gap-16 mt-5">

        {/* COLUMN 1 */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#fa9404]">WHAT WE STAND FOR</p>
          <h2 className="text-4xl font-bold text-[#0e1924] mt-2">
            We are dedicated to children's rights.
          </h2>

          <p className="text-sm font-semibold text-[#fa9404] mt-8">WHAT WE DO</p>
          <h3 className="text-xl font-bold text-[#0e1924] mt-1">
            We Make Sure to Provide <br /> Care for Children
          </h3>
          <p className="text-gray-700 mt-3 max-w-md">
            Lorem Ipsum main services is providing basic necessities such as
            food, shelter, and clothing to children who are living in poverty
            or experiencing homelessness.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#fa9404]">
            WE’RE MAKING A HUGE DIFFERENCE
          </p>
          <h3 className="text-xl font-bold text-[#0e1924] mt-2">
            We believe every child deserves a chance
          </h3>
          <p className="text-gray-700 mt-3 max-w-md">
            Lorem Ipsum main services is providing basic necessities such as
            food, shelter, and clothing to children who are living in poverty
            or experiencing homelessness.
          </p>
        </div>

        {/* COLUMN 3 → CENTER IMAGES */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[260px] h-[260px]">

            {/* BACK IMAGE */}
            <Image
              src="/manage/main-img1.jpg"
              alt="Child"
              width={260}
              height={260}
              className="rounded-xl shadow-xl opacity-90 border-t-4 border-r-4 border-orange-500"
            />

            {/* FRONT OVERLAPPING IMAGE */}
            <Image
              src="/manage/main-img2.jpg"
              alt="Child"
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
