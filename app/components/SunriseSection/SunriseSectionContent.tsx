import Image from "next/image";
import { BurgerContext } from "context";
import { useContext } from "react";
import { Button, MobileNavigation } from "components";
import { useWindowSize } from "hooks";

import starSrc from "./img/star.svg";
import cloverSrc from "./img/clover.png";

import styles from "./sunriseSection.module.scss";

export const SunriseSectionContent = () => {
	const { activeBurger } = useContext(BurgerContext);
	const { isLaptopS } = useWindowSize();

	return (
		<section className={styles.component}>
			{!activeBurger && (
				<div>
					<h1 className="text-[32px] md:text-[52px] lg:text-7xl xl:text-[90px] font-light flex flex-col md:gap-8 gap-5 w-full">
						<span className="text-black font-unbounded">Shaping Futures</span>
						<div className={styles.textWrapper}>
							<div className={styles.textBg}>Through</div>
							<Image
								src={cloverSrc}
								alt="clover"
								className={styles.cloverImg}
							/>
						</div>
						<div className="font-unbounded flex justify-end gap-3.5 md:gap-6 items-center">
							<Image src={starSrc} alt="star" className={styles.starImg} />
							Digital Innovation
						</div>
					</h1>
					{isLaptopS && (
						<Button className="bg-primary mt-[203px]" size="full">
							Contact us
						</Button>
					)}
				</div>
			)}
			<div
				className={
					activeBurger ? styles.activeBurgerMenu : styles.inactiveBurgerMenu
				}
			>
				<MobileNavigation />
			</div>
		</section>
	);
};
