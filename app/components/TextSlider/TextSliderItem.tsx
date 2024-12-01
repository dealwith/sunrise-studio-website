import { FunctionComponent } from "react";

import { cn } from "utils/cn";

type TProps = {
  text: string;
  className?: string;
};

export const TextSliderItem: FunctionComponent<TProps> = ({
  text,
  className: propsClassName,
}) => {
  const textClassName = cn(
    "lg:text-[64px] md:text-[52px] text-[32px] font-unboundedMedium text-nowrap",
    propsClassName,
  );

  return <h3 className={textClassName}>{text}</h3>;
};
