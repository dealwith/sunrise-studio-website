"use client";

import {
  ContactUsSection,
  GoogleAnalyticsScript,
  InnovationsSection,
  OurDomainsSection,
  ServicesBackground,
  ServicesSectionContent,
  SunriseContainer,
  WhoWeWorkWithSection,
} from "components";
import { useSmoothScroll } from "hooks";

export default function Building() {
  const { elementRef } = useSmoothScroll();

  console.log("commit");

  return (
    <>
      <main
        ref={elementRef}
        className="flex min-h-screen flex-col items-center justify-between w-full"
      >
        <ServicesBackground>
          <SunriseContainer>
            <ServicesSectionContent />
          </SunriseContainer>
        </ServicesBackground>
        <SunriseContainer>
          <OurDomainsSection />
          <InnovationsSection />
          <WhoWeWorkWithSection />
          <ContactUsSection />
        </SunriseContainer>
      </main>
      <GoogleAnalyticsScript />
    </>
  );
}
