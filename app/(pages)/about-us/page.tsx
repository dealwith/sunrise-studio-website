"use client";

import {
  AboutUsSectionContent,
  DigitalStudioAndTeamSection,
  Footer,
  LinedTeamSection,
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
        <AboutUsSectionContent />
        <DigitalStudioAndTeamSection />
        <LinedTeamSection />
        <Footer />
      </SunriseContainer>
    </main>
  );
}
