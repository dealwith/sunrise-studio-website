import Link from "next/link";
import { useContext } from "react";

import { ROUTES } from "constants/index";
import { BurgerContext } from "context";
import { cn } from "utils/cn";

import styles from "./navigation.module.scss";

export const MobileNavigation = () => {
  const { isActiveBurger, setIsActiveBurger } = useContext(BurgerContext);

  const handleBurgerClick = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  return (
    <div
      className={cn("absolute ease-out duration-300", {
        "right-0 top-0 z-10 w-full flex justify-center items-center h-[calc(100vh-108px)]":
          isActiveBurger,
        "-right-[100vw]": !isActiveBurger,
      })}
    >
      <nav className="flex flex-col justify-center">
        <ul className={styles.mobileList} onClick={handleBurgerClick}>
          <li>
            <Link href={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link href={ROUTES.ABOUT_US}>About us</Link>
          </li>
          <li>
            <Link href={ROUTES.BUILDING}>Building</Link>
          </li>
          <li>
            <Link href={ROUTES.STAFFING}>Staffing</Link>
          </li>
          {/* <li>
            <Link href="#projects">Projects</Link>
          </li> */}
          <li>
            <Link href={ROUTES.ECOMMERCE}>E-commerce</Link>
          </li>
          <li>
            <Link href="#contactUs">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
