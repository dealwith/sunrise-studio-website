import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { P } from "components";
import { cn } from "utils/cn";

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
  const textClassName = cn(
    "font-unboundedBold lg:text-xl text-sm whitespace-nowrap",
    isDarkLogo ? "text-black" : "text-white",
  );

  return (
    <Link href={"/"} className="flex items-center gap-3 min-w-max">
      <Image
        className={cn("p-0.5", propsClassName)}
        src={isDarkLogo ? DarkLogoSrc : LightLogoSrc}
        alt="logo"
        width={width}
        height={height}
      />
      <P className={textClassName}>sunrise studio</P>
    </Link>
  );
};
