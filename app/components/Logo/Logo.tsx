import Image from "next/image";
import logoSrc from "./img/Logo.svg";
import styles from "./logo.module.scss";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo = ({ width, height, className }: Props) => {
  return (
    <Image
      className={styles.component}
      src={logoSrc}
      alt="logo"
      width={width}
      height={height}
    />
  );
};
