"use client";

import {
  AuroraBackground,
  ContactUsSection,
  SunriseContainer,
} from "components";

import {
  StaffingComplexityHandlingSection,
  StaffingCostBenefitsSection,
  StaffingGrowingProjectSection,
  StaffingSectionContent,
} from "./_components";

export default function Staffing() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <AuroraBackground>
          <SunriseContainer className="z-10">
            <StaffingSectionContent />
          </SunriseContainer>
        </AuroraBackground>
        <SunriseContainer>
          <StaffingGrowingProjectSection />
          <StaffingCostBenefitsSection />
          <StaffingComplexityHandlingSection />
          <ContactUsSection isMainPage={true} />
        </SunriseContainer>
      </main>
    </>
  );
}
