import { MainContainer } from "components";

import styles from "./ourTeamsExperienceSection.module.scss";

export const OurTeamsExperienceSection = () => {
	return (
		<MainContainer>
			<section className={styles.component}>
				<h2 className="text-[52px] font-unbounded font-light">
					Our team&apos;s experience helps you find the best{" "}
					<div className={styles.textBg}>employees</div> around the world
				</h2>
			</section>
		</MainContainer>
	);
};
