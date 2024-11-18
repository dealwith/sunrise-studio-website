"use client";

import {
  AboutUsSectionContent,
  ContactUsSection,
  DigitalStudioAndTeamSection,
  LinedTeamSection,
  OurTeamSection,
  SunriseContainer,
  TextSliderSection,
  WhoWeWorkWithSection,
} from "components";
import { useSmoothScroll } from "hooks";

export default function AboutUs() {
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
        <TextSliderSection />
        <OurTeamSection />
        <WhoWeWorkWithSection />
        <ContactUsSection />
      </SunriseContainer>
    </main>
  );
}
