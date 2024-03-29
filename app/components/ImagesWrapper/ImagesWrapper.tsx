import Image from "next/image";
import { ArrowButton } from "components";

import styles from "./imagesWrapper.module.scss";
import firstImageSrc from "./img/FirstImage.jpg";
import secondImageSrc from "./img/SecondImage.jpg";
import thirdImageSrc from "./img/ThirdImage.jpg";

export const ImagesWrapper = () => {
	return (
		<div className={styles.component}>
			<div className={styles.imagesContainer}>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={firstImageSrc}
						alt="Image"
						fill
					/>
				</div>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={secondImageSrc}
						alt="Image"
						fill
					/>
				</div>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={thirdImageSrc}
						alt="Image"
						fill
					/>
				</div>
				<ArrowButton width="14px" height="14px" className={styles.btnWrapper}>
					View all
				</ArrowButton>
			</div>
		</div>
	);
};
