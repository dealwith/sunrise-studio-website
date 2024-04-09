import Image from "next/image";

import logoSrc from "./img/Logo.svg";

export const Logo = () => {
  return <Image src={logoSrc} alt="logo" />;
};
