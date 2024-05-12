import Image from "next/image";

import { cn } from "@utils/cn";

import logoSrc from "./img/Logo.svg";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo = ({ width, height, className: propsClassName }: Props) => {
  return (
    <Image
      className={cn("bg-black rounded-full p-0.5", propsClassName)}
      src={logoSrc}
      alt="logo"
      width={width}
      height={height}
    />
  );
};
