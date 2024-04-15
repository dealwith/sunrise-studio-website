import Image from "next/image";
import { ArrowButton } from "components";

import styles from "./imagesWrapper.module.scss";
import firstImageSrc from "./img/FirstImage.jpg";
import thirdImageSrc from "./img/ThirdImage.jpg";

export const ImagesWrapper = () => {
  return (
    <div className={styles.component}>
      <div className={styles.imagesContainer}>
        <div className={styles.imageWrapper}>
          <a href="https://www.ag-exchange.org/" target="_blank">
            <Image
              className={styles.image}
              src={firstImageSrc}
              alt="Image"
              fill
            />
          </a>
        </div>
        <div className={`${styles.imageWrapper} ${styles.imageWrapperText}`}>
          <p>
            Here can be your next <br />
            <strong>idea.</strong>
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <a
            href="https://leaderboard.paragonevents.gg/?o=6516c8527df610c311ee705a&c=65d8b870b69baa8bbf9295d9&r=paragon-dls22&p=twitch"
            target="_blank"
          >
            <Image
              className={styles.image}
              src={thirdImageSrc}
              alt="Image"
              fill
            />
          </a>
        </div>
        <ArrowButton width="14px" height="14px" className={styles.btnWrapper}>
          View all
        </ArrowButton>
      </div>
    </div>
  );
};
