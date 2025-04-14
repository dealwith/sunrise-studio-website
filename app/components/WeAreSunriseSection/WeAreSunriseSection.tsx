import Image from "next/image";
import Link from "next/link";

import { ArrowButton, P, UnderlineText } from "components";

import styles from "./weAreSunriseSection.module.scss";

import bubbleSrc from "/public/images/bubble.png";

export const WeAreSunriseSection = () => {
  return (
    <section id="aboutUs" className="pt-[60px] md:pt-[100px] lg:pt-[70px]">
      <UnderlineText
        text="Scale Your Projects"
        isRedText={true}
        imageClassName="lg:w-fit md:w-[200px] w-[120px]"
      />
      <div className="flex justify-between">
        <div className={styles.textWrapper}>
          <P className="lg:!text-3xl md:!text-xl">
            Based in Poland, Sunrise Studio is your gateway to digital and
            staffing solutions. Our studio is comprised of software engineers,
            designers, and industry experts ready to take your project to the
            next level.
          </P>
          <Link
            className="max-w-[400px] w-full sm:w-fit self-center sm:self-auto"
            href="#contactUs"
          >
            <ArrowButton
              width="14px"
              height="14px"
              className="sm:w-fit w-full px-11 flex justify-center bg-primary whitespace-nowrap text-white hover:bg-white hover:text-accent transition-all"
            >
              Message us
            </ArrowButton>
          </Link>
        </div>
        <div className="relative lg:w-3/5 md:w-[45%]">
          <Image src={bubbleSrc} alt="bubble" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
