import { Button, FooterNavigation, H4, ScrollButton } from "components";
import { COLORS } from "constants/index";

import styles from "./footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.component}>
			<div className={styles.contentWrapper}>
				<FooterNavigation />
				<div className={styles.content}>
					<H4 className={styles.text}>
						Write us to schedule a call to discuss your project and learn more
						about sunrise studio
					</H4>
					<div className="flex justify-between">
						<Button className="bg-primary" size="m">
							Contact us
						</Button>
						<ScrollButton
							className={styles.btn}
							defaultColor={COLORS.WHITE}
							hoverColor={COLORS.BLACK}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};
