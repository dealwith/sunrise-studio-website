import Image from "next/image";
import { MainContainer } from "components";

import styles from "./sunriseSection.module.scss";

import starSrc from "./img/star.svg";
import cloverSrc from "./img/clover.png";

export const SunriseSectionContent = () => {
	return (
		<MainContainer>
			<section className={styles.component}>
				<h1 className="text-7xl font-light flex flex-col gap-8 w-full">
					<span className="text-black font-unbounded">Shaping Futures</span>
					<div className={styles.textWrapper}>
						<div className={styles.textBg}>Through</div>
						<Image src={cloverSrc} alt="clover" width={160} height={160} />
					</div>
					<div className="font-unbounded flex justify-end gap-6">
						<Image src={starSrc} alt="star" width={116} height={78} />
						Digital Innovation
					</div>
				</h1>
			</section>
		</MainContainer>
	);
};
