"use client";

import {
  ContactUsSection,
  Footer,
  EcommerceSectionContent,
  EcommerceSectionBackground,
  SunriseContainer,
  EcommerceOurServicesSection,
  ServicesBackground,
  EcommerceWhyChooseUsSection,
  GoogleAnalyticsScript,
} from "components";
import { useSmoothScroll } from "hooks";

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
          <ContactUsSection isMainPage={true} />
          <Footer isMainPage={true} />
        </SunriseContainer>
      </main>
      <GoogleAnalyticsScript />
    </>
  );
}
