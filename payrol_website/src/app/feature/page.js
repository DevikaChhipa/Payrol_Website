"use client";

import Featuresbanner from "../../../components/Feature/FeatureBanner";
import Featuremultibranch from "../../../components/Feature/MultiBranch";
import ReportSection from "../../../components/Feature/Report";



export default function Contact() {
  return (    
    <>
    <div className="bg-[#eef2f5]">
        <Featuresbanner />
        <Featuremultibranch />
        <ReportSection />
    </div>
    </>
  );
}