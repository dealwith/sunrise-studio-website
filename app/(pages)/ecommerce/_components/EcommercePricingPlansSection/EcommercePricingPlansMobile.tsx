import { FunctionComponent, useContext } from "react";
import { useFormContext } from "react-hook-form";

import { Button } from "components";
import { PricingContext } from "context";
import { Plan, PricingPlansProps } from "types";

import { featureHeaders } from "../../_data/featureHeaders";
import { featureSections } from "../../_data/featureSections";
import { IPricingPlanForm } from "../../_interfaces/IPricingPlanForm";
import {
  getFeatureSections,
  getPlanPricing,
} from "../../_utils/getfilteredPricingPlan";

import { CardTab } from "./CardTab";

export const EcommercePricingPlansMobile: FunctionComponent<
  PricingPlansProps
> = ({ plans, handleScroll }) => {
  const { setSelectedPlan } = useContext(PricingContext);
  const { register, watch, setValue } = useFormContext<IPricingPlanForm>();
  const inputPlan = register("plan");
  const activePlan = watch(inputPlan.name);
  const activePeriod = watch("period");
  const filteredPlan = plans.find((plan: Plan) => plan.name === activePlan);
  const mappedFeatureSections = getFeatureSections(
    filteredPlan,
    featureSections,
  );
  const { price, period } = getPlanPricing(filteredPlan, activePeriod);
  const handleClick = () => {
    handleScroll();
    if (filteredPlan) {
      setValue("plan", filteredPlan.name);
      setSelectedPlan({ period: activePeriod, plan: activePlan });
    }
  };

  return (
    <div className="w-full bg-black rounded-2xl">
      <div className="flex w-full">
        <CardTab text="Starter" />
        <CardTab text="Growth" />
        <CardTab text="Enterprise" />
      </div>
      <div className="flex flex-col gap-7 md:px-7 px-4 py-7 bg-accent">
        <h3 className="text-xl font-unboundedBold">{activePlan}</h3>
        <h4 className="text-4xl font-unboundedBold">
          {price ? (
            <>
              {price}
              <span className="font-onest text-base ml-2">{period}</span>
            </>
          ) : (
            "Custom"
          )}
        </h4>
        <Button
          size="l"
          onClick={handleClick}
          className="self-center max-w-sm transition-all hover:bg-white hover:text-accent bg-black"
        >
          {price ? "Start free trial" : "Contact sales"}
        </Button>
      </div>
      <div className="flex">
        <div className="flex flex-col w-full bg-accent grow">
          {Object.entries(featureHeaders).map(([key, section]) => (
            <div key={key}>
              <h4 className="md:px-7 px-4 text-xl font-bold flex items-center md:h-20 h-16 border-b">
                {section.title}
              </h4>
              <ul>
                {section.headers.map((header) => (
                  <li
                    key={header}
                    className="md:px-7 px-4 flex items-center md:h-20 h-16 md:text-base text-sm border-b"
                  >
                    {header}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full bg-accent">
          {mappedFeatureSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <ul>
                {section.keys.map((key: string) => (
                  <li
                    key={key}
                    className="px-4 lg:px-7 flex items-center md:h-20 h-16 md:text-base text-sm border-b"
                  >
                    {section.features[key]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-b-xl flex flex-col gap-7 md:px-7 px-4 py-7 bg-accent">
        <Button
          size="l"
          onClick={handleClick}
          className="self-center max-w-sm transition-all hover:bg-white hover:text-accent bg-black"
        >
          {price ? "Start free trial" : "Contact sales"}
        </Button>
      </div>
    </div>
  );
};
