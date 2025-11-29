"use client";

import AboutBanner from "../../../components/About/AboutBanner";
import BusinessImpact from "../../../components/About/AboutBusiness";
import CompanyStory from "../../../components/About/AboutCompany";
import VisionMission from "../../../components/About/visionmission";
import WhyChooseUs from "../../../components/About/WhyChoose";


export default function About() {
  return (
    <>
      <AboutBanner />
      <CompanyStory />
      <VisionMission />
      <WhyChooseUs />
      <BusinessImpact />
    </>
  );
}
