import { FormEvent, FunctionComponent } from "react";

import { ToggleButtonProps } from "types";

import { ToggleButton } from ".//ToggleButton";

export const EcommercePricingPeriodToggle: FunctionComponent = () => {
  const periodOptions: ToggleButtonProps[] = [
    { label: "Monthly", value: "monthly" },
    { label: "Yearly", value: "yearly" },
  ];
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      method="POST"
      className="flex p-1 bg-black rounded-xl w-full max-w-[354px]"
    >
      {periodOptions.map(({ label, value }) => (
        <ToggleButton key={value} label={label} value={value} />
      ))}
    </form>
  );
};
