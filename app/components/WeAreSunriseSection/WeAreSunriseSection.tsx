import Image from "next/image";
import { ArrowButton, H2, P } from "components";

import styles from "./weAreSunriseSection.module.scss";

import underlineSrc from "./img/underline.svg";
import bubbleSrc from "./img/bubble.png";

export const WeAreSunriseSection = () => {
  return (
    <section id="aboutUs" className="pt-[70px] h-[674px]">
      <div className="w-fit">
        <H2 className={styles.title}>We are sunrise studio</H2>
        <Image src={underlineSrc} alt="underline" />
      </div>
      <div className="flex">
        <div className={styles.textWrapper}>
          <P className="!text-xl">
            Our role is to facilitate the creation of eye-catching and
            functional solutions, for the fraction of the rate. Collaboration
            with our clients lies at the heart of our process, and we help bring
            visions to life.
          </P>
          {/* <ArrowButton className="bg-primary mt-3.5" width="10px" height="10px">
            Learn more
          </ArrowButton> */}
        </div>
        <div className="relative w-3/5">
          <Image src={bubbleSrc} alt="bubble" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
