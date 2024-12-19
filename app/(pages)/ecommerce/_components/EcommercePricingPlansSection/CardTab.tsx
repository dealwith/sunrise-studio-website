import { FunctionComponent } from "react";

import { Button } from "components";
import { cn } from "utils/cn";

type TProps = {
  text: string;
  activePlan: string;
  setActivePlan: (period: string) => void;
};

export const CardTab: FunctionComponent<TProps> = ({
  text,
  activePlan,
  setActivePlan,
}) => {
  const isActive = text === activePlan;
  const handleClick = () => {
    setActivePlan(text);
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "md:text-base text-sm py-4 px-5 rounded-t-xl w-full flex justify-center items-center duration-300",
        {
          "bg-accent": isActive,
        },
      )}
    >
      {text}
    </Button>
  );
};
