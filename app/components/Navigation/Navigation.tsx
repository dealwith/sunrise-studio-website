import { LiWithActiveLink } from "components";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className="flex flex-col w-full justify-center items-center text-white">
      <ul className={styles.list}>
        <LiWithActiveLink href={"#home"}>Home</LiWithActiveLink>
        <LiWithActiveLink href={"#aboutUs"}>About us</LiWithActiveLink>
        <LiWithActiveLink href={"#services"}>Services</LiWithActiveLink>
        <LiWithActiveLink href={"#projects"}>Projects</LiWithActiveLink>
      </ul>
    </nav>
  );
};
