import Image from "next/image";

import styles from "./sunriseSection.module.scss";
import backgroundSrc from "./img/background.jpg";

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
