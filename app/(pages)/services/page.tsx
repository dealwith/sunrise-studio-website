"use client";

import {
  ContactUsSection,
  Footer,
  InnovationsSection,
  OurDomainsSection,
  ServicesBackground,
  ServicesSectionContent,
  SunriseContainer,
  WhoWeWorkWithSection,
} from "components";
import { useSmoothScroll } from "hooks";

export default function Services() {
  const { elementRef, scrollToRef } = useSmoothScroll();

  return (
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
        <Footer />
      </SunriseContainer>
    </main>
  );
}
