import Image from "next/image";
import { cn } from "utils/cn";
import { usePathname } from "next/navigation";

import DarkLogoSrc from "./img/darkLogo.svg";

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
      src={DarkLogoSrc}
      alt="logo"
      width={width}
      height={height}
    />
  );
};
