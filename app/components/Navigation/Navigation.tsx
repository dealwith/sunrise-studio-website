import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className="flex flex-col w-full justify-center items-center">
      <ul className={styles.list}>
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
      </ul>
    </nav>
  );
};
