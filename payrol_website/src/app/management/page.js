"use client";

import ComplianceTaxhandling from "../../../components/Management/Compliance";
import MainSection from "../../../components/Management/DescSection";
import ManagementBanner from "../../../components/Management/ManageBanner";
import BusinessNeed from "../../../components/Management/ManageBusiness";
import ManualAutomated from "../../../components/Management/Manual";
import WorkProcessFlow from "../../../components/Management/ProcessFlow";


export default function PayrollManagement() {
  return (    
    <>
    <ManagementBanner />
    <MainSection />
     <ManualAutomated />
     <WorkProcessFlow />
 <BusinessNeed />
 <ComplianceTaxhandling />


    </>
  );
}