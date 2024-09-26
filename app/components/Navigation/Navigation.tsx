import { LiWithActiveLink } from "components";
import { ROUTES } from "constants/index";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className="flex flex-col w-full justify-center items-center text-white">
      <ul className={styles.list}>
        <LiWithActiveLink href={ROUTES.HOME}>Home</LiWithActiveLink>
        <LiWithActiveLink href={ROUTES.ABOUT_US}>About us</LiWithActiveLink>
        <LiWithActiveLink href={ROUTES.SERVICES}>Services</LiWithActiveLink>
        <LiWithActiveLink href={"#projects"}>Projects</LiWithActiveLink>
      </ul>
    </nav>
  );
};
