import { zodResolver } from "@hookform/resolvers/zod";
import { FunctionComponent } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useWindowSize } from "hooks";

import { pricingPlans } from "../../_data/pricingPlans";
import { IPricingPlanForm } from "../../_interfaces/IPricingPlanForm";
import { pricingPlanSchema } from "../../_utils/validation/PricingPlanSchema";

import { EcommercePricingPeriodToggle } from "./EcommercePricingPeriodToggle";
import { EcommercePricingPlansCard } from "./EcommercePricingPlansCard";
import { EcommercePricingPlansHeader } from "./EcommercePricingPlansHeader";
import { EcommercePricingPlansMobile } from "./EcommercePricingPlansMobile";

type TProps = {
  handleScroll: () => void;
};

export const EcommercePricingPlans: FunctionComponent<TProps> = ({
  handleScroll,
}) => {
  const { isLaptopL } = useWindowSize();
  const methods = useForm<IPricingPlanForm>({
    defaultValues: {
      period: "monthly",
      plan: "Starter",
    },
    resolver: zodResolver(pricingPlanSchema),
  });

  return (
    <FormProvider {...methods}>
      <div className="w-full flex flex-col items-center justify-center mt-[60px] lg:gap-10 gap-7">
        <EcommercePricingPeriodToggle />
        {isLaptopL ? (
          <div className="flex">
            <EcommercePricingPlansHeader />
            {pricingPlans.map((plan) => (
              <EcommercePricingPlansCard
                key={plan.id}
                planName={plan.name}
                plan={plan}
                handleScroll={handleScroll}
              />
            ))}
          </div>
        ) : (
          <EcommercePricingPlansMobile
            plans={pricingPlans}
            handleScroll={handleScroll}
          />
        )}
      </div>
    </FormProvider>
  );
};
