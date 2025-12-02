import { FaLightbulb, FaBolt, FaShieldAlt, FaMicrophone, FaTv, FaHome } from "react-icons/fa";

export default function ReportSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#FEFDF7]">
      <div className="max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <div className="text-center mb-16">
         <span className="bg-white text-gray-700 px-4 py-2 text-sm font-semibold rounded-md">
            Reports and Analytics
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#222] leading-tight mt-3">
            Smart Solutions Designed to <br /> Simplify the Way You Live
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* SERVICE CARD REUSABLE FORMAT */}
          {[
            { icon: <FaLightbulb className="text-4xl" />, title: "Lighting Control" },
            { icon: <FaBolt className="text-4xl" />, title: "Energy Management" },
            { icon: <FaShieldAlt className="text-4xl" />, title: "Security Automation" },
            { icon: <FaMicrophone className="text-4xl" />, title: "Voice Integration" },
            { icon: <FaTv className="text-4xl" />, title: "Entertainment Setup" },
            { icon: <FaHome className="text-4xl" />, title: "Custom Automation" },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-[#0E1924] text-white rounded-2xl p-8 shadow-lg 
                transition-all duration-300 hover:bg-[#2A2A2A] hover:bg-[#fa9404] group
              "
            >
              <div className="mb-4 text-[#E7E7E7]">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-black">{item.title}</h3>

              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus corper mattis.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
