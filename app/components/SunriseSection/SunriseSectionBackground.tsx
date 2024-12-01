import Image from "next/image";

import backgroundSrc from "./img/background.jpg";
import styles from "./sunriseSection.module.scss";

export const SunriseSectionBackground = () => {
  return (
    <div className={styles.background}>
      <Image
        className={styles.image}
        src={backgroundSrc}
        alt="Sunrise background"
      />
    </div>
  );
};
