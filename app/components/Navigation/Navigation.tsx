import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className="flex flex-col w-full justify-center items-center">
      <ul className={styles.list}>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#aboutUs">About us</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};
