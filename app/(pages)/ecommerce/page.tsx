"use client";

import {
  ContactUsSection,
  Footer,
  PricingSection,
  SunriseContainer,
} from "components";
import { useSmoothScroll } from "hooks";

export default function Pricing() {
  const { elementRef, scrollToRef } = useSmoothScroll();

  return (
    <main
      ref={elementRef}
      className="flex min-h-screen flex-col items-center justify-between w-full"
    >
      <SunriseContainer>
        <PricingSection />
        <ContactUsSection />
        <Footer handleClick={scrollToRef} />
      </SunriseContainer>
    </main>
  );
}
