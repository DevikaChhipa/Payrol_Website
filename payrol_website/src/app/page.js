import Image from "next/image";
import Banner from "../../components/Home/Banner";
import AboutSection from "../../components/Home/AboutSection";
import Feature from "../../components/Home/Feature";
import WhyChoose from "../../components/Home/WhyChoose";
import TestimonialSection from "../../components/Home/TestimonialSection";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <Feature />
      <WhyChoose />
      <TestimonialSection />
    </>
  );
}
