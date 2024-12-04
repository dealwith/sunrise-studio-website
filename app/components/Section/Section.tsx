import { FunctionComponent, ReactNode } from "react";

import { cn } from "@utils/cn";

type TProps = {
  children: ReactNode;
  className?: string;
};

export const Section: FunctionComponent<TProps> = ({
  children,
  className: propsClassName,
}) => {
  const sectionClassName = cn(
    "w-full flex flex-col md:gap-[60px] gap-6 lg:pt-[120px] pt-[60px]",
    propsClassName,
  );

  return <section className={sectionClassName}>{children}</section>;
};
