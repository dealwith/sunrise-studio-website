import { H2, ImagesWrapper, MainContainer } from "components";

import styles from "./ourProjectsSection.module.scss";

export const OurProjectsSection = () => {
	return (
		<MainContainer>
			<section className={styles.component}>
				<H2>Our projects</H2>
				<ImagesWrapper />
			</section>
		</MainContainer>
	);
};
