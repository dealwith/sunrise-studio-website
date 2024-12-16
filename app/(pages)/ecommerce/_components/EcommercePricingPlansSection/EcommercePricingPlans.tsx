import { useState } from "react";

import { EcommercePricingPeriodToggle } from "./EcommercePricingPeriodToggle";

export const EcommercePricingPlans = () => {
  const [activePeriod, setActivePeriod] = useState("Monthly");

  return (
    <div className="w-full flex justify-center mt-[60px]">
      <EcommercePricingPeriodToggle
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
      />
    </div>
  );
};
