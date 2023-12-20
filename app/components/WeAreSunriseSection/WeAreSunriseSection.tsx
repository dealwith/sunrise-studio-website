import Image from "next/image";
import { ArrowButton, H2, MainContainer, P } from "components";

import styles from "./weAreSunriseSection.module.scss";

import underlineSrc from "./img/underline.svg";
import bubbleSrc from "./img/bubble.png";

export const WeAreSunriseSection = () => {
	return (
		<MainContainer>
			<section className="pt-[70px] h-[674px]">
				<div className="w-fit">
					<H2 className={styles.title}>We are sunrise studio</H2>
					<Image src={underlineSrc} alt="underline" />
				</div>
				<div className="flex">
					<div className={styles.textWrapper}>
						<P>
							Our team of experienced designers and marketing professionals work
							closely with each client to understand their unique vision and
							develop tailored solutions that align with their goals.
						</P>
						<P>
							From designing eye-catching logos and brand identities, to
							building custom websites that engage and convert visitors, to
							crafting effective influencer marketing campaigns, we are
							dedicated to helping our clients succeed in the digital space.
						</P>
						<ArrowButton
							className="bg-primary mt-3.5"
							width="10px"
							height="10px"
						>
							Learn more
						</ArrowButton>
					</div>
					<div className="relative w-3/5">
						<Image src={bubbleSrc} alt="bubble" className={styles.image} />
					</div>
				</div>
			</section>
		</MainContainer>
	);
};
