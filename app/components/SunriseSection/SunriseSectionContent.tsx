import Link from "next/link";
import { useContext } from "react";

import { Star } from "@icons/Star";
import { ArrowButton, MobileNavigation, P } from "components";
import { BurgerContext } from "context";
import { useWindowSize } from "hooks";

import styles from "./sunriseSection.module.scss";

export const SunriseSectionContent = () => {
  const { isActiveBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  return (
    <section id="home" className={styles.component}>
      {!isActiveBurger && (
        <div className="w-full flex flex-col justify-between h-full">
          <div></div>
          <div className="w-full flex flex-col items-center gap-40 justify-between">
            <h1 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-7xl xl:text-[90px] font-light flex flex-col md:gap-8 gap-5 w-full">
              <span className="font-unbounded">Shaping the Future</span>
              <div className={styles.textWrapper}>
                <div className={styles.textBg}>With</div>
              </div>
              <div className="font-unbounded flex justify-end gap-3.5 md:gap-6 items-center">
                <Star alt="star" className={styles.starImg} />
                Staffing Solutions
              </div>
            </h1>
          </div>
          <div className="flex flex-col sm:items-start items-center gap-30 pt-14 pb-9 relative z-10">
            <P className="lg:!text-3xl md:!text-xl">
              Empowering Your Growth with Poland’s Finest Talent – Scale Faster,
              Innovate 10x More. From our team to yours, we deliver top-tier
              developers and flexible solutions to drive your digital projects
              to success.
            </P>
            <Link className="max-w-[400px] w-full sm:w-fit" href="#contactUs">
              <ArrowButton
                width="14px"
                height="14px"
                className="sm:w-fit w-full px-11 flex justify-center bg-primary whitespace-nowrap text-white hover:bg-white hover:text-accent transition-all"
              >
                Talk to us
              </ArrowButton>
            </Link>
          </div>
        </div>
      )}
      {isLaptopS && <MobileNavigation />}
    </section>
  );
};
