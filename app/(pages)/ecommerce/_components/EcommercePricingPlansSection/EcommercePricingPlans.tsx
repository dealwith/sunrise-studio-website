import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { IPricingPlanForm } from "../../_interfaces/IPricingPlanForm";
import { pricingPlanSchema } from "../../_utils/validation/PricingPlanSchema";

import { EcommercePricingPeriodToggle } from "./EcommercePricingPeriodToggle";

export const EcommercePricingPlans = () => {
  const methods = useForm<IPricingPlanForm>({
    defaultValues: {
      period: "monthly",
    },
    resolver: zodResolver(pricingPlanSchema),
  });

  return (
    <FormProvider {...methods}>
      <div className="w-full flex justify-center mt-[60px]">
        <EcommercePricingPeriodToggle />
      </div>
    </FormProvider>
  );
};
