"use client";

import { useState } from "react";
import {
  ContactUsSection,
  Footer,
  Header,
  OurProjectsSection,
  OurTeamsExperienceSection,
  SunriseSectionBackground,
  SunriseSectionContent,
  WeAreSunriseSection,
  WhatWeDoSection,
  WhoWeWorkWithSection,
} from "components";
import { BurgerContext } from "context";

export default function Home() {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <BurgerContext.Provider value={{ activeBurger, setActiveBurger }}>
      <main className="flex min-h-screen flex-col items-center justify-between">
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
        <Header />
        <SunriseSectionBackground />
        <SunriseSectionContent />
        <WeAreSunriseSection />
        <OurTeamsExperienceSection />
        <WhatWeDoSection />
        <OurProjectsSection />
        <WhoWeWorkWithSection />
        <ContactUsSection />
        <Footer />
      </main>
    </BurgerContext.Provider>
  );
}
