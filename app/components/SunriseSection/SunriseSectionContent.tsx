import Image from "next/image";
import Link from "next/link";
import { BurgerContext } from "context";
import { useContext } from "react";
import { Button, MobileNavigation } from "components";
import { useWindowSize } from "hooks";

import starSrc from "./img/star.svg";
import cloverSrc from "./img/clover.png";

import styles from "./sunriseSection.module.scss";

export const SunriseSectionContent = () => {
  const { activeBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  return (
    <section id="home" className={styles.component}>
      {!activeBurger && (
        <div className="w-full flex flex-col items-center gap-40 justify-between">
          <h1 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-7xl xl:text-[90px] font-light flex flex-col md:gap-8 gap-5 w-full">
            <span className="text-black font-unbounded">Shaping Future</span>
            <div className={styles.textWrapper}>
              <div className={styles.textBg}>Through</div>
              <Image
                src={cloverSrc}
                alt="clover"
                className={styles.cloverImg}
              />
            </div>
            <div className="font-unbounded flex justify-end gap-3.5 md:gap-6 items-center">
              <Image src={starSrc} alt="star" className={styles.starImg} />
              Digital Innovation
            </div>
          </h1>
          {isLaptopS && (
            <Link className={styles.link} href="#contactUs">
              <Button className="bg-primary" size="l">
                Contact us
              </Button>
            </Link>
          )}
        </div>
      )}
      <div
        className={
          activeBurger ? styles.activeBurgerMenu : styles.inactiveBurgerMenu
        }
      >
        <MobileNavigation />
      </div>
    </section>
  );
};
