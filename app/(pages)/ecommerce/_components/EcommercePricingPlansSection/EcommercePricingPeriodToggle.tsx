import { FunctionComponent } from "react";

import { ToggleButton } from "components";

type TProps = {
  activePeriod: string;
  setActivePeriod: (period: string) => void;
};

export const EcommercePricingPeriodToggle: FunctionComponent<TProps> = ({
  activePeriod,
  setActivePeriod,
}) => {
  return (
    <div className="flex p-1 bg-black rounded-xl w-full max-w-[354px]">
      <ToggleButton
        text="Monthly"
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
      />
      <ToggleButton
        text="Yearly"
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
      />
    </div>
  );
};
