"use client";

import AttendanceandIntegration from "../../../components/Feature/FeatureAttend";
import Featuresbanner from "../../../components/Feature/FeatureBanner";
import Featuremultibranch from "../../../components/Feature/MultiBranch";
import ReportSection from "../../../components/Feature/Report";
import SalaryCalculation from "../../../components/Feature/SalaryCalc";
import TaxDeductionSection from "../../../components/Feature/TaxDeduction";
import PayslipGeneration from "../../../components/Feature/FeaturePayslip";
import EmployeeSelfService from "../../../components/Feature/FeatureEmployee";
import FeatureData from "../../../components/Feature/DataSecurity";



export default function Contact() {
  return (    
    <>
    <div className="bg-[#eef2f5]">
        <Featuresbanner />
        <AttendanceandIntegration />
        <SalaryCalculation />
        <Featuremultibranch />
        <FeatureData />
        <EmployeeSelfService />
        <ReportSection />
        <TaxDeductionSection />
        <PayslipGeneration />
    </div>
    </>
  );
}