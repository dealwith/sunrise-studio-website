import { FunctionComponent } from "react";

import { Button } from "components";
import { PricingPlanProps } from "types";
import { cn } from "utils/cn";

export const EcommercePricingPlansCard: FunctionComponent<PricingPlanProps> = ({
  planName,
  activePlan,
  setActivePlan,
  activePeriod,
  plan,
}) => {
  const featureSections = [
    {
      features: plan.features.coreMedusaFeatures,
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
      features: plan.features.cloudInfrastructure,
      keys: ["header", "resources", "scalability", "backups"],
    },
    {
      features: plan.features.integrationsAPIs,
      keys: ["header", "apiAccess", "integrations"],
    },
    {
      features: plan.features.supportServices,
      keys: ["header", "support", "onboarding", "updates"],
    },
    {
      features: plan.features.additionalFeatures,
      keys: ["header", "analytics", "seo", "marketplace"],
    },
  ];
  const isActive = planName === activePlan;
  const isYearly = activePeriod === "Yearly" && plan.yearlyPrice;
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const period = isYearly ? "/Year" : "/Month";
  const handleClick = () => {
    setActivePlan(planName);
  };
  const buttonClassName = cn(
    "transition-all",
    isActive
      ? "bg-black hover:bg-white hover:text-black"
      : "bg-accent hover:bg-white hover:text-accent",
  );
  const periodClassName = cn(
    "font-onest text-base ml-2",
    isActive ? "text-white" : "text-accent",
  );

  return (
    <div
      className={cn("py-7 rounded-2xl duration-300 w-full", {
        "bg-accent": isActive,
      })}
    >
      <div className="flex flex-col gap-7 lg:px-7 px-4">
        <h3 className="text-xl font-unboundedBold">{planName}</h3>
        <h4 className="text-4xl font-unboundedBold">
          {price ? (
            <>
              {price}
              <span className={periodClassName}>{period}</span>
            </>
          ) : (
            "Custom"
          )}
        </h4>
        <Button size="l" onClick={handleClick} className={buttonClassName}>
          {price ? "Choose This Plan" : "Contact sales"}
        </Button>
      </div>
      <div className="flex flex-col mt-[28px]">
        {featureSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <ul>
              {section.keys.map((key) => (
                <li
                  key={key}
                  className="px-4 lg:px-7 flex items-center md:h-20 h-16 md:text-base text-sm border-b"
                >
                  {section.features[key as keyof typeof section.features]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="lg:px-7 px-4 pt-7">
        <Button size="l" onClick={handleClick} className={buttonClassName}>
          {price ? "Choose This Plan" : "Contact sales"}
        </Button>
      </div>
    </div>
  );
};
