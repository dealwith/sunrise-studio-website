"use client";

import {
  AuroraBackground,
  ContactUsSection,
  Footer,
  StaffingComplexityHandlingSection,
  StaffingCostBenefitsSection,
  StaffingGrowingProjectSection,
  StaffingSectionContent,
  SunriseContainer,
} from "components";

export default function Staffing() {
  return (
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
        <Footer isMainPage={true} />
      </SunriseContainer>
    </main>
  );
}
