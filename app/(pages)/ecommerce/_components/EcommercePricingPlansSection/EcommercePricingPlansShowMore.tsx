import { FunctionComponent, ReactNode, useState } from "react";

import { Button } from "components";
import { useWindowSize } from "hooks";
import { cn } from "utils/cn";

type TProps = {
  children: ReactNode;
};

export const EcommercePricingPlansShowMore: FunctionComponent<TProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLaptopL } = useWindowSize();
  const text = isOpen ? "Show less" : "Show more";
  const activeContainerShadow = isLaptopL && !isOpen;
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const containerClassName = cn(
    "overflow-y-hidden",
    isOpen ? "h-auto" : "h-[862px] md:h-[974px] laptop-m:h-[1090px]",
  );

  return (
    <div className="flex flex-col gap-12 items-center relative">
      <div className={containerClassName}>{children}</div>
      {activeContainerShadow && (
        <div className="absolute bottom-16 w-[calc(100%+2rem)] h-48 bg-black opacity-70  filter blur-lg"></div>
      )}
      <Button
        size="m"
        onClick={handleClick}
        className="bg-accent hover:bg-white hover:text-accent transition-all"
      >
        {text}
      </Button>
    </div>
  );
};
