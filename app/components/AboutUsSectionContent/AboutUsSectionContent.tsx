import Image from "next/image";
import Link from "next/link";
import { BurgerContext } from "context";
import { useContext } from "react";
import { Button, MobileNavigation } from "components";
import { useWindowSize } from "hooks";

import starSrc from "/public/images/star.svg";
import bubbleSrc from "/public/images/bubble.png";

export const AboutUsSectionContent = () => {
  const { isActiveBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  return (
    <section className="h-screen flex items-center">
      {!isActiveBurger && (
        <div className="w-full flex flex-col items-center justify-center gap-40 z-10">
          <h1 className="font-unbounded text-[32px] md:text-[54px] lg:text-[90px] font-light flex 2xl:justify-center flex-col 2xl:flex-row lg:gap-3.5 md:gap-9 gap-5 w-full">
            We are
            <div className="flex justify-end items-center lg:gap-2 gap-3.5">
              <Image
                src={starSrc}
                alt="star"
                className="lg:w-[134px] w-[104px] lg:h-[87px] md:h-20 h-[68px]"
              />
              Sunrise studio
            </div>
          </h1>
          <Link
            className="max-w-[400px] w-full md:hidden block"
            href="#contactUs"
          >
            <Button className="bg-primary" size="l">
              Contact us
            </Button>
          </Link>
          <Image
            src={bubbleSrc}
            alt="bubble"
            className="absolute top-0 -right-32 bottom-0 m-auto -z-10"
          />
        </div>
      )}

      {isLaptopS && <MobileNavigation />}
    </section>
  );
};
