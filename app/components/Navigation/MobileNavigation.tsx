import Link from "next/link";
import { useContext } from "react";
import { BurgerContext } from "@/context";

import styles from "./navigation.module.scss";

export const MobileNavigation = () => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);

  const handleBurgerClick = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <div
      className={
        activeBurger
          ? "absolute right-0 top-0 z-10 w-full ease-out duration-300 flex justify-center items-center h-[calc(100vh-108px)]"
          : "absolute -right-[100vw] ease-out duration-300"
      }
    >
      <nav className="flex flex-col justify-center">
        <ul className={styles.mobileList} onClick={handleBurgerClick}>
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
          <li>
            <Link href="#contactUs">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
