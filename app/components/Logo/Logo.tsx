import Image from "next/image";

import logoSrc from "./img/Logo.svg";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo = ({ width, height, className }: Props) => {
  return (
    <Image
      className={className}
      src={logoSrc}
      alt="logo"
      width={width}
      height={height}
    />
  );
};
