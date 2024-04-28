import { ReactNode, HTMLProps } from "react";
import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className="flex flex-col w-full justify-center items-center text-white">
      <ul className={styles.list}>
        <Li>
          <Link href="#home">Home</Link>
        </Li>
        <Li>
          <Link href="#aboutUs">About us</Link>
        </Li>
        <Li>
          <Link href="#services">Services</Link>
        </Li>
        <Li>
          <Link href="#projects">Projects</Link>
        </Li>
      </ul>
    </nav>
  );
};

interface LiProps extends HTMLProps<HTMLLIElement> {
  children: ReactNode;
}

const Li = ({ children, ...rest }: LiProps) => (
  <li className="text-white hover:text-black transition-colors" {...rest}>
    {children}
  </li>
);
