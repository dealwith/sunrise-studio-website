import { useState } from "react";

import { EcommercePricingPeriodToggle } from "./EcommercePricingPeriodToggle";
import { EcommercePricingPlansCard } from "./EcommercePricingPlansCard";
import { EcommercePricingPlansHeader } from "./EcommercePricingPlansHeader";

const pricingPlans = {
  starter: {
    name: "Starter",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: {
      coreMedusaFeatures: {
        header: "",
        setup: "Basic setup",
        productsLimit: "Up to 1,000",
        themes: "3 pre-built themes",
        gateways: "2 standard gateways",
        regions: "1 region, 1 currency",
        orderManagement: "Basic",
      },
      cloudInfrastructure: {
        header: "",
        resources: "Shared resources",
        scalability: "Auto-scaling up to 2x",
        backups: "Daily",
      },
      integrationsAPIs: {
        header: "",
        apiAccess: "Read-only",
        integrations: "Up to 3 basic integrations",
      },
      supportServices: {
        header: "",
        support: "Email support (business hours)",
        onboarding: "Self-serve documentation",
        updates: "Automated monthly updates",
      },
      additionalFeatures: {
        header: "",
        analytics: "Basic Medusa analytics",
        seo: "Basic SEO features",
        marketplace: "Access to free extensions",
      },
    },
  },
  growth: {
    name: "Growth",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: {
      coreMedusaFeatures: {
        header: "",
        setup: "Advanced setup",
        productsLimit: "Up to 10,000",
        themes: "10+ themes + custom CSS",
        gateways: "5+ gateways",
        regions: "Up to 3 regions, 3 currencies",
        orderManagement: "Advanced with automation",
      },
      cloudInfrastructure: {
        header: "",
        resources: "Dedicated resources",
        scalability: "Auto-scaling up to 5x",
        backups: "Hourly",
      },
      integrationsAPIs: {
        header: "",
        apiAccess: "Full API access",
        integrations: "Up to 10 advanced integrations",
      },
      supportServices: {
        header: "",
        support: "Priority email & chat support (business hours)",
        onboarding: "Guided setup (5 hours)",
        updates: "Automated weekly updates",
      },
      additionalFeatures: {
        header: "",
        analytics: "Advanced analytics + 1 external tool",
        seo: "Advanced SEO optimization",
        marketplace: "All extensions included",
      },
    },
  },
  enterprise: {
    name: "Enterprise",
    customPricing: true,
    features: {
      coreMedusaFeatures: {
        header: "",
        setup: "Full customization",
        productsLimit: "Unlimited",
        themes: "Fully customizable + headless options",
        gateways: "Unlimited + custom gateway support",
        regions: "Unlimited regions and currencies",
        orderManagement: "Fully customizable workflows",
      },
      cloudInfrastructure: {
        header: "",
        resources: "High-availability cluster",
        scalability: "Unlimited auto-scaling",
        backups: "Real-time + point-in-time recovery",
      },
      integrationsAPIs: {
        header: "",
        apiAccess: "Advanced API with custom endpoints",
        integrations: "Unlimited + custom integrations",
      },
      supportServices: {
        header: "",
        support: "24/7 phone, email & chat + dedicated account manager",
        onboarding: "Full onboarding & migration assistance",
        updates: "Continuous updates & hotfixes",
      },
      additionalFeatures: {
        header: "",
        analytics: "Custom analytics suite + data warehouse",
        seo: "Full SEO suite + consultant hours",
        marketplace: "Custom extension development",
      },
    },
  },
};

export const EcommercePricingPlans = () => {
  const [activePeriod, setActivePeriod] = useState("Monthly");
  const [activePlan, setActivePlan] = useState("Starter");

  return (
    <div className="w-full flex flex-col justify-center items-center mt-[60px] lg:gap-10 gap-7">
      <EcommercePricingPeriodToggle
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
      />
      <div className="flex">
        <EcommercePricingPlansHeader />
        <EcommercePricingPlansCard
          planName="Starter"
          activePlan={activePlan}
          setActivePlan={setActivePlan}
          activePeriod={activePeriod}
          plan={pricingPlans.starter}
        />
        <EcommercePricingPlansCard
          planName="Growth"
          activePlan={activePlan}
          setActivePlan={setActivePlan}
          activePeriod={activePeriod}
          plan={pricingPlans.growth}
        />
        <EcommercePricingPlansCard
          planName="Enterprise"
          activePlan={activePlan}
          setActivePlan={setActivePlan}
          activePeriod={activePeriod}
          plan={pricingPlans.enterprise}
        />
      </div>
    </div>
  );
};
