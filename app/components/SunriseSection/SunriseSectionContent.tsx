import { useContext } from "react";

import { Star } from "@icons/Star";
import { MobileNavigation } from "components";
import { BurgerContext } from "context";
import { useWindowSize } from "hooks";

import styles from "./sunriseSection.module.scss";

export const SunriseSectionContent = () => {
  const { isActiveBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  return (
    <section id="home" className={styles.component}>
      {!isActiveBurger && (
        <div className="w-full flex flex-col justify-between">
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
        </div>
      )}
      {isLaptopS && <MobileNavigation />}
    </section>
  );
};
