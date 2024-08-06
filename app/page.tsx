"use client";

import { useRef } from "react";
import {
  ContactUsSection,
  Footer,
  OurProjectsSection,
  OurTeamsExperienceSection,
  SunriseSectionContent,
  WeAreSunriseSection,
  WhatWeDoSection,
  WhoWeWorkWithSection,
} from "components";
import { AuroraBackground } from "./components/Background/AuroraBackground";
import { SunriseContainer } from "./components/Container/SunriseContainer";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      ref={mainRef}
      className="flex min-h-screen flex-col items-center justify-between w-full"
    >
      <AuroraBackground>
        <SunriseContainer className="z-10">
          <SunriseSectionContent />
        </SunriseContainer>
      </AuroraBackground>
      <SunriseContainer>
        <WeAreSunriseSection />
        <OurTeamsExperienceSection />
        <WhatWeDoSection />
        <OurProjectsSection />
        <WhoWeWorkWithSection />
        <ContactUsSection isMainPage={true} />
        <Footer handleClick={handleClick} />
      </SunriseContainer>
    </main>
  );
}
