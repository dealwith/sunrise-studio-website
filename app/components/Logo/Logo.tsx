import Image from "next/image";

import logoSrc from "./img/Logo.svg";

type Props = {
  width?: number;
  height?: number;
};

export const Logo = ({ width, height }: Props) => {
  return <Image src={logoSrc} alt="logo" width={width} height={height} />;
};
