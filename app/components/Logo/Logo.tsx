import Image from "next/image";
import { cn } from "utils/cn";
import { usePathname } from "next/navigation";

import DarkLogoSrc from "./img/darkLogo.svg";
import LightLogoSrc from "./img/lightLogo.svg";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo = ({ width, height, className: propsClassName }: Props) => {
  const pathname = usePathname();
  const isDarkLogo =
    pathname === "/" ||
    pathname === "/services" ||
    pathname === "/ecommerce" ||
    pathname === "/staffing";

  return (
    <Image
      className={cn("p-0.5", propsClassName)}
      src={isDarkLogo ? DarkLogoSrc : LightLogoSrc}
      alt="logo"
      width={width}
      height={height}
    />
  );
};
