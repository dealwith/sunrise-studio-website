import { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";

import { Button } from "components";
import { cn } from "utils/cn";

import { IPricingPlanForm } from "../../_interfaces/IPricingPlanForm";

type TProps = {
  text: string;
};

export const CardTab: FunctionComponent<TProps> = ({ text }) => {
  const { watch, setValue } = useFormContext<IPricingPlanForm>();
  const activePlan = watch("plan");
  const handleClick = () => {
    setValue("plan", text);
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "md:text-base text-sm py-4 px-5 rounded-t-xl w-full flex justify-center items-center duration-300",
        {
          "bg-accent": text === activePlan,
        },
      )}
    >
      {text}
    </Button>
  );
};
