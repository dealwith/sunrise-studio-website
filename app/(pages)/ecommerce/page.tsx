"use client";

import { useState } from "react";

import {
  ContactUsSection,
  ServicesBackground,
  SunriseContainer,
} from "components";
import { PricingContext } from "context";
import { useSmoothScroll } from "hooks";
import { PricingSelectedPlan } from "types";

import {
  EcommerceOurServicesSection,
  EcommercePricingPlansSection,
  EcommerceSectionBackground,
  EcommerceSectionContent,
  EcommerceWhyChooseUsSection,
} from "./_components";

export default function Ecommerce() {
  const { elementRef, scrollToRef } = useSmoothScroll();
  const [selectedPlan, setSelectedPlan] = useState<PricingSelectedPlan>({
    period: "",
    plan: "",
  });

  return (
    <PricingContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
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
          <EcommercePricingPlansSection handleScroll={scrollToRef} />
          <ContactUsSection isMainPage={true} ref={elementRef} />
        </SunriseContainer>
      </main>
    </PricingContext.Provider>
  );
}
