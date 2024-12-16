import { FunctionComponent } from "react";

import { cn } from "utils";

import { Button } from "./Button";

type TProps = {
  text: string;
  activePeriod: string;
  setActivePeriod: (period: string) => void;
};

export const ToggleButton: FunctionComponent<TProps> = ({
  text,
  activePeriod,
  setActivePeriod,
}) => {
  const isActive = text === activePeriod;
  const handleClick = () => {
    setActivePeriod(text);
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "py-1.5 px-4 rounded-xl w-full flex justify-center items-center md:text-xl text-base duration-300",
        {
          "bg-accent": isActive,
        },
      )}
    >
      {text}
    </Button>
  );
};
