import { HTMLProps, ReactNode } from "react";

import { cn } from "@utils/cn";

interface SunriseContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const SunriseContainer = ({
  children,
  className,
  ...rest
}: SunriseContainerProps) => (
  <div
    className={cn(
      "max-w-[1440px] w-full py-0 px-4 md:px-10 my-0 mx-auto overflow-hidden",
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);
