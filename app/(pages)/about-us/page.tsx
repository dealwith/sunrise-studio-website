"use client";

import { AboutUsSectionContent, Footer, SunriseContainer } from "components";
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
        <Footer handleClick={scrollToRef} />
      </SunriseContainer>
    </main>
  );
}
