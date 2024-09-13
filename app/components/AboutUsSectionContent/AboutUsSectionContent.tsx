import Image from "next/image";
import Link from "next/link";
import { BurgerContext } from "context";
import { useContext } from "react";
import { Button, MobileNavigation } from "components";

import cloverSrc from "/public/images/clover.png";
import starSrc from "/public/images/star.svg";
import bubbleSrc from "/public/images/bubble.png";

export const AboutUsSectionContent = () => {
  const { isActiveBurger } = useContext(BurgerContext);

  return (
    <section className="h-screen flex items-center">
      {!isActiveBurger && (
        <div className="w-full flex flex-col items-center justify-center gap-40 z-10">
          <h1 className="font-unbounded text-[32px] md:text-[54px] lg:text-[90px] font-light flex flex-col lg:gap-3.5 md:gap-9 gap-5 w-full">
            <div className="flex justify-start items-center lg:gap-0 gap-5">
              We are
              <Image
                src={cloverSrc}
                alt="clover"
                className="lg:w-40 md:w-[86px] w-12 lg:h-40 md:h-[86px] h-12"
              />
            </div>
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
        </div>
      )}
      <Image
        src={bubbleSrc}
        alt="bubble"
        className="absolute top-0 -right-32 bottom-0 m-auto"
      />
      <MobileNavigation />
    </section>
  );
};
