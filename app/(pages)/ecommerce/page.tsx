"use client";

import {
  ContactUsSection,
  EcommerceSectionContent,
  EcommerceSectionBackground,
  SunriseContainer,
  EcommerceOurServicesSection,
  ServicesBackground,
  EcommerceWhyChooseUsSection,
} from "components";
import { useSmoothScroll } from "hooks";

export default function Ecommerce() {
  const { elementRef, scrollToRef } = useSmoothScroll();

  return (
    <main
      ref={elementRef}
      className="flex min-h-screen flex-col items-center justify-between w-full"
    >
      <SunriseContainer>
        <EcommerceSectionBackground />
        <EcommerceSectionContent />
      </SunriseContainer>
      <ServicesBackground>
        <SunriseContainer>
          <EcommerceOurServicesSection />
        </SunriseContainer>
      </ServicesBackground>
      <SunriseContainer>
        <EcommerceWhyChooseUsSection />
        <ContactUsSection isMainPage={true} />
      </SunriseContainer>
    </main>
  );
}
