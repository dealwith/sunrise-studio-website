import { Dispatch, SetStateAction, createContext } from "react";

import { PricingSelectedPlan } from "types";

type TProps = {
  selectedPlan: PricingSelectedPlan;
  setSelectedPlan: Dispatch<SetStateAction<PricingSelectedPlan>>;
};

export const PricingContext = createContext<TProps>({
  selectedPlan: {
    period: undefined,
    plan: undefined,
  },
  setSelectedPlan: () => {},
});
