"use client";

import {
  ContactUsSection,
  Footer,
  EcommerceSectionContent,
  EcommerceSectionBackground,
  SunriseContainer,
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
        <ContactUsSection />
        <Footer />
      </SunriseContainer>
    </main>
  );
}
