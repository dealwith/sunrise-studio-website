export type Period = "monthly" | "yearly";

export type ToggleButtonProps = {
  label: string;
  value: Period;
};

export type PlanFeatures = {
  header: string;
  [key: string]: string;
};

export type PlanFeatureGroups = {
  coreMedusaFeatures: PlanFeatures;
  cloudInfrastructure: PlanFeatures;
  integrationsAPIs: PlanFeatures;
  supportServices: PlanFeatures;
  additionalFeatures: PlanFeatures;
};

export type Plan = {
  id: string;
  name: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  customPricing?: boolean;
  features: PlanFeatureGroups;
};

export type PricingPlanProps = {
  planName?: string;
  plan?: Plan;
};

export type PricingPlansProps = PricingPlanProps & {
  plans: Plan[];
};

export type FeatureSection = {
  features: PlanFeatures;
  keys: Array<keyof PlanFeatures>;
};
