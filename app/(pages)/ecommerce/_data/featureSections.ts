import { PlanFeatureGroups } from "types";

export const featureSections: Array<{
  features: keyof PlanFeatureGroups;
  keys: string[];
}> = [
  {
    features: "coreMedusaFeatures",
    keys: [
      "header",
      "setup",
      "productsLimit",
      "themes",
      "gateways",
      "regions",
      "orderManagement",
    ],
  },
  {
    features: "cloudInfrastructure",
    keys: ["header", "resources", "scalability", "backups"],
  },
  {
    features: "integrationsAPIs",
    keys: ["header", "apiAccess", "integrations"],
  },
  {
    features: "supportServices",
    keys: ["header", "support", "onboarding", "updates"],
  },
  {
    features: "additionalFeatures",
    keys: ["header", "analytics", "seo", "marketplace"],
  },
];
