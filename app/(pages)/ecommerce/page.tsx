"use client";

import {
  ContactUsSection,
  GoogleAnalyticsScript,
  ServicesBackground,
  SunriseContainer,
} from "components";
import { useSmoothScroll } from "hooks";

import {
  EcommerceOurServicesSection,
  EcommercePricingPlansSection,
  EcommerceSectionBackground,
  EcommerceSectionContent,
  EcommerceWhyChooseUsSection,
} from "./_components";

export default function Ecommerce() {
  const { elementRef, scrollToRef } = useSmoothScroll();

  return (
    <>
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
          <EcommercePricingPlansSection />
          <ContactUsSection isMainPage={true} />
        </SunriseContainer>
      </main>
      <GoogleAnalyticsScript />
    </>
  );
}
