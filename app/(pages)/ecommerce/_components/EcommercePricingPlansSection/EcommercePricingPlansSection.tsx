import { H2, P, Section } from "components";

import { EcommerceChip } from "./EcommerceChip";
import { EcommercePricingPlans } from "./EcommercePricingPlans";
import { EcommercePricingPlansShowMore } from "./EcommercePricingPlansShowMore";

export const EcommercePricingPlansSection = () => {
  return (
    <Section className="gap-[60px]">
      <div className="flex flex-col items-center gap-6">
        <H2 className="text-center lg:w-4/5">
          Medusa Cloud E-commerce Solution Pricing Plans
        </H2>
        <P className="font-light md:text-xl text-center">
          Start with a 14-day free trial on any plan. Upgrade or downgrade
          anytime.
        </P>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <h3 className="md:text-4xl text-2xl font-unboundedBold text-center">
          All plans include
        </h3>
        <div className="lg:w-4/5 flex md:gap-5 gap-3 flex-wrap items-center justify-center">
          <EcommerceChip text="99.9% uptime SLA" />
          <EcommerceChip text="SSL certificate" />
          <EcommerceChip text="DDoS protection" />
          <EcommerceChip text="Automatic Medusa core updates" />
        </div>
        <EcommercePricingPlansShowMore>
          <EcommercePricingPlans />
        </EcommercePricingPlansShowMore>
      </div>
    </Section>
  );
};
