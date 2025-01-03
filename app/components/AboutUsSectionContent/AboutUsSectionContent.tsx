import Link from "next/link";
import { useContext } from "react";

import { Star } from "@icons/Star";
import { Button, MobileNavigation } from "components";
import { BurgerContext } from "context";
import { useWindowSize } from "hooks";
import { cn } from "utils/cn";

export const AboutUsSectionContent = () => {
  const { isActiveBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  const headingClass = cn(
    "font-unbounded text-8xl text-[32px] md:text-[54px] lg:text-[90px] font-light",
    "flex flex-col items-center laptop-l:flex-row 2xl:justify-center 2xl:flex-row lg:gap-3.5 md:gap-9 gap-5 w-full",
  );

  return (
    <section className="h-screen flex items-center">
      {!isActiveBurger && (
        <div className="w-full flex flex-col items-center justify-center gap-40 z-10">
          <h1 className={headingClass}>
            <span className="flex items-center lg:gap-3.5 md:gap-9 gap-3.5 laptop-l:flex-row md:flex-col">
              We are{" "}
              <Star
                alt="star"
                className="md:w-[116px] md:h-[78px] w-[58px] h-[39px]"
              />
            </span>
            <span className="flex justify-end items-center lg:gap-2 gap-3.5 text-accent">
              Sunrise studio
            </span>
          </h1>
          <Link
            className="max-w-[400px] w-full md:hidden block"
            href="#contactUs"
          >
            <Button className="bg-primary" size="l">
              Contact us
            </Button>
          </Link>
        </div>
      )}
      {isLaptopS && <MobileNavigation />}
    </section>
  );
};
