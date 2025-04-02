"use client";

import {
  ContactUsSection,
  FAQSection,
  SunriseSectionContent,
  WeAreSunriseSection,
  WhatWeBuildSection,
  WhatWeDoSection,
  WhoWeWorkWithSection,
} from "components";
import { useSmoothScroll } from "hooks";

import { AuroraBackground } from "../components/Background/AuroraBackground";
import { SunriseContainer } from "../components/Container/SunriseContainer";

export default function Home() {
  const { elementRef, scrollToRef } = useSmoothScroll();

  return (
    <>
      <main
        ref={elementRef}
        className="flex min-h-screen flex-col items-center justify-between w-full"
      >
        <AuroraBackground>
          <SunriseContainer className="z-10 h-screen flex">
            <SunriseSectionContent />
          </SunriseContainer>
        </AuroraBackground>
        <SunriseContainer>
          <WeAreSunriseSection />
          <WhatWeDoSection />
          <WhatWeBuildSection />
          <FAQSection />
          <WhoWeWorkWithSection />
          <ContactUsSection isMainPage={true} />
        </SunriseContainer>
      </main>
    </>
  );
}
