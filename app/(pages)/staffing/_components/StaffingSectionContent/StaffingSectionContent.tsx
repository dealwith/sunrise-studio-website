import { useContext } from "react";

import {
  CalendlyWidget,
  MobileNavigation,
  Section,
  UnderlineText,
} from "components";
import { BurgerContext } from "context";
import { useWindowSize } from "hooks";

export const StaffingSectionContent = () => {
  const { isActiveBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  return (
    <Section>
      {!isActiveBurger && (
        <div className="flex md:gap-8 gap-4 items-center md:flex-row flex-col">
          <UnderlineText
            text="Get the best developers, without all the stress"
            isRedText={false}
            textClassName="md:text-start text-center"
            imageClassName="md:mt-6 mt-3"
          />
          <div className="flex p-5 flex-col items-center gap-3 rounded-2xl bg-primary bg-opacity-50 max-w-[500px] w-full mt-5 md:mt-5">
            <h2 className="md:text-3xl text-1xl text-center font-unbounded px-3">
              Schedule a call with us
            </h2>
            <CalendlyWidget />
          </div>
        </div>
      )}
      {isLaptopS && <MobileNavigation />}
    </Section>
  );
};
