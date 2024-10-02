"use client";

import {
  ContactUsSection,
  Footer,
  OurProjectsSection,
  SunriseSectionContent,
  WeAreSunriseSection,
  WhatWeBuildSection,
  WhatWeDoSection,
  WhoWeWorkWithSection,
} from "components";
import { AuroraBackground } from "./components/Background/AuroraBackground";
import { SunriseContainer } from "./components/Container/SunriseContainer";
import { useSmoothScroll } from "hooks";

export default function Home() {
  const { elementRef, scrollToRef } = useSmoothScroll();

  return (
    <main
      ref={elementRef}
      className="flex min-h-screen flex-col items-center justify-between w-full"
    >
      <AuroraBackground>
        <SunriseContainer className="z-10">
          <SunriseSectionContent />
        </SunriseContainer>
      </AuroraBackground>
      <SunriseContainer>
        <WeAreSunriseSection />
        <WhatWeDoSection />
        <WhatWeBuildSection />
        <OurProjectsSection />
        <WhoWeWorkWithSection />
        <ContactUsSection isMainPage={true} />
        <Footer isMainPage={true} />
      </SunriseContainer>
    </main>
  );
}
