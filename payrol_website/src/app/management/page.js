"use client";

import MainSection from "../../../components/Management/DescSection";
import ManagementBanner from "../../../components/Management/ManageBanner";
import BusinessNeed from "../../../components/Management/ManageBusiness";
import WorkProcessFlow from "../../../components/Management/ProcessFlow";




export default function PayrollManagement() {
  return (    
    <>
    <ManagementBanner />
    <MainSection />
     <WorkProcessFlow />
 <BusinessNeed />

    </>
  );
}