import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import { H3, P } from "components";

import styles from "./whoWeWorkWithCard.module.scss";

import { ButtonArrow } from "../Button/img/ButtonArrow";

type TProps = {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
  children: string;
  feedbackGiverUrl: string;
  projectUrl: string;
};

export const WhoWeWorkWithCard: FunctionComponent<TProps> = ({
  image,
  title,
  subtitle,
  children,
  feedbackGiverUrl,
  projectUrl,
}) => {
  return (
    <div className={`${styles.full_width_breakpoint} w-6/12`}>
      <a href={feedbackGiverUrl} target="_blank" className={styles.link}>
        <div className="flex gap-3.5 mb-4">
          {typeof image === "string" ? (
            <img
              src={image}
              alt="Logo"
              width={46}
              height={46}
              className="rounded-full"
            />
          ) : (
            <Image
              src={image}
              alt="Logo"
              width={46}
              height={46}
              className="rounded-full"
            />
          )}
          <div>
            <H3>{title}</H3>
            <P className={styles.text}>{subtitle}</P>
          </div>
        </div>
      </a>
      <div className="flex flex-col gap-5">
        <P className={styles.text}>{children}</P>
        <a href={projectUrl} target="_blank" className={styles.link}>
          Visit website <ButtonArrow width="10px" height="10px" />
        </a>
      </div>
    </div>
  );
};
