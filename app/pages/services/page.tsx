"use client";

import {
  InnovationsSection,
  OurDomainsSection,
  ServicesBackground,
  ServicesSectionContent,
  SunriseContainer,
} from "components";

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <ServicesBackground>
        <SunriseContainer>
          <ServicesSectionContent />
        </SunriseContainer>
      </ServicesBackground>
      <SunriseContainer>
        <OurDomainsSection />
        <InnovationsSection />
      </SunriseContainer>
    </main>
  );
}
