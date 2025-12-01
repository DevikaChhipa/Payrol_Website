"use client";

import AboutBanner from "../../../components/About/AboutBanner";
import BusinessImpact from "../../../components/About/AboutBusiness";
import CompanyStory from "../../../components/About/AboutCompany";
import VisionMission from "../../../components/About/visionmission";
import WhyChooseUs from "../../../components/About/WhyChoose";
import Cta from "../../../components/Home/Cta";


export default function About() {
  return (
    <>
      <AboutBanner />
      <CompanyStory />
      <VisionMission />
      <WhyChooseUs />
      <BusinessImpact />
      <Cta />
    </>
  );
}
