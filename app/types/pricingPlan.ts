export type PricingPlanProps = {
  planName: string;
  activePlan: string;
  setActivePlan: (plan: string) => void;
  activePeriod: string;
  plan: {
    name: string;
    monthlyPrice?: number;
    yearlyPrice?: number;
    customPricing?: boolean;
    features: {
      coreMedusaFeatures: {
        header: string;
        setup: string;
        productsLimit: string;
        themes: string;
        gateways: string;
        regions: string;
        orderManagement: string;
      };
      cloudInfrastructure: {
        header: string;
        resources: string;
        scalability: string;
        backups: string;
      };
      integrationsAPIs: {
        header: string;
        apiAccess: string;
        integrations: string;
      };
      supportServices: {
        header: string;
        support: string;
        onboarding: string;
        updates: string;
      };
      additionalFeatures: {
        header: string;
        analytics: string;
        seo: string;
        marketplace: string;
      };
    };
  };
};

export type FeatureSection = {
  features: PricingPlanProps["plan"]["features"][keyof PricingPlanProps["plan"]["features"]];
  keys: string[];
};
