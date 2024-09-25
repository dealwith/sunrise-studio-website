import Image from "next/image";
import { H2, P } from "components";

import styles from "./weAreSunriseSection.module.scss";

import underlineSrc from "./img/underline.svg";
import bubbleSrc from "/public/images/bubble.png";

export const WeAreSunriseSection = () => {
  return (
    <section
      id="aboutUs"
      className="pt-[60px] md:pt-[100px] lg:pt-[70px] h-fit md:h-[400px] lg:h-[674px]"
    >
      <div className="w-fit">
        <H2 className="text-accent">We are sunrise studio</H2>
        <Image
          src={underlineSrc}
          alt="underline"
          className={styles.underline}
        />
      </div>
      <div className="flex justify-between">
        <div className={styles.textWrapper}>
          <P className="md:!text-xl">
            Based in Poland, Sunrise Studio is your gateway to digital and
            staffing solutions. Our studio is comprised of software engineers,
            designers, and industry experts ready to take your project to the
            next level.
          </P>
          {/* <ArrowButton className="bg-primary mt-3.5" width="10px" height="10px">
            Learn more
          </ArrowButton> */}
        </div>
        <div className="relative lg:w-3/5 md:w-[45%]">
          <Image src={bubbleSrc} alt="bubble" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
