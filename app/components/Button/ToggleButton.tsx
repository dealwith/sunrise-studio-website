import { cn } from "utils";

import { Button } from "./Button";

export const ToggleButton = ({ text, activeText }) => {
  const isActive = text === activeText;

  return (
    <Button className={cn("py-1.5 px-4 rounded-xl", { "bg-accent": isActive })}>
      {text}
    </Button>
  );
};
