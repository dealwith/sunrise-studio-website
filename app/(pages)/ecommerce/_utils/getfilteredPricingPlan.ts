import { Plan, PlanFeatureGroups } from "types";

export const getPlanPricing = (filteredPlan?: Plan, activePeriod?: string) => {
  if (!filteredPlan) {
    return {
      price: "",
      period: "",
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
  filteredPlan?: Plan,
  featureSections: Array<{
    features: keyof PlanFeatureGroups;
    keys: string[];
  }> = [],
) => {
  if (!filteredPlan || !featureSections) {
    return [];
  }

  return featureSections.map((section) => ({
    features: filteredPlan.features[section.features],
    keys: section.keys,
  }));
};
