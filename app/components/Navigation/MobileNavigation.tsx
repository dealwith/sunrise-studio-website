import Link from "next/link";

import styles from "./navigation.module.scss";

export const MobileNavigation = () => {
	return (
		<nav className="flex flex-col justify-center">
			<ul className={styles.mobileList}>
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
					<Link href="#">Projects</Link>
				</li>
				<li>
					<Link href="#">Contact us</Link>
				</li>
			</ul>
		</nav>
	);
};
