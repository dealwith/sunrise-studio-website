import { ToggleButton } from "components";

export const EcommercePricingPeriodToggle = () => {
  return (
    <div>
      <ToggleButton text="Monthly" activeText="Monthly" />
      <ToggleButton text="Yearly" activeText="Monthly" />
    </div>
  );
};
