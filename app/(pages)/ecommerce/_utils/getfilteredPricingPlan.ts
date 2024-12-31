import { Plan } from "types";

export const getPlanPricing = (filteredPlan?: Plan, activePeriod?: string) => {
  if (!filteredPlan) {
    return {
      price: null,
      period: null,
    };
  }

  const isYearly =
    filteredPlan && activePeriod === "yearly" && filteredPlan.yearlyPrice;

  return {
    price: isYearly ? filteredPlan.yearlyPrice : filteredPlan.monthlyPrice,
    period: isYearly ? "/Year" : "/Month",
  };
};

export const getFeatureSections = (
  filteredPlan: Plan | undefined,
  featureSections: any[] = [],
) => {
  if (!filteredPlan || !featureSections) {
    return [];
  }

  return featureSections.map((section) => ({
    features:
      filteredPlan.features[
        section.features as keyof typeof filteredPlan.features
      ],
    keys: section.keys,
  }));
};
