"use client";

import { useState } from "react";
import { Container } from "@radix-ui/themes";
import {
  ContactUsSection,
  Footer,
  Header,
  OurProjectsSection,
  OurTeamsExperienceSection,
  SunriseSectionContent,
  WeAreSunriseSection,
  WhatWeDoSection,
  WhoWeWorkWithSection,
} from "components";
import { BurgerContext } from "context";
import { AuroraBackground } from "./components/Background/AuroraBackground";
import { SunriseContainer } from "./components/Container/SunriseContainer";

export default function Home() {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <BurgerContext.Provider value={{ activeBurger, setActiveBurger }}>
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        {activeBurger ? (
          <style jsx global>{`
            body {
              overflow-y: hidden;
            }
          `}</style>
        ) : (
          <style jsx global>{`
            body {
              overflow-y: auto;
            }
          `}</style>
        )}
        <AuroraBackground>
          <SunriseContainer className="z-10">
            <Header />
            <SunriseSectionContent />
          </SunriseContainer>
        </AuroraBackground>
        <SunriseContainer>
          <WeAreSunriseSection />
          <OurTeamsExperienceSection />
          <WhatWeDoSection />
          <OurProjectsSection />
          <WhoWeWorkWithSection />
          <ContactUsSection />
          <Footer />
        </SunriseContainer>
      </main>
    </BurgerContext.Provider>
  );
}
