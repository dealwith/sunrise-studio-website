import { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";

import { Button } from "components";
import { ToggleButtonProps } from "types";
import { cn } from "utils";

import { IPricingPlanForm } from "../../_interfaces/IPricingPlanForm";

export const ToggleButton: FunctionComponent<ToggleButtonProps> = ({
  label,
  value,
}) => {
  const { register, watch, setValue } = useFormContext<IPricingPlanForm>();
  const periodInput = register("period");
  const currentPeriod = watch(periodInput.name);
  const isActive = currentPeriod === value;
  const handleClick = () => {
    setValue("period", value);
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
      {label}
    </Button>
  );
};
