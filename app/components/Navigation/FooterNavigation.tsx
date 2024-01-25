import Link from "next/link";

import styles from "./navigation.module.scss";

export const FooterNavigation = () => {
	return (
		<nav>
			<ul className={styles.footerList}>
				<li>
					<Link href="#">Home</Link>
				</li>
				<li>
					<Link href="#">About us</Link>
				</li>
				<li>
					<Link href="#">Services</Link>
				</li>
				<li>
					<Link href="#">Blog</Link>
				</li>
			</ul>
		</nav>
	);
};
