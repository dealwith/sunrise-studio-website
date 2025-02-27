import { FunctionComponent } from "react";

import { H2, P, Section } from "components";

import { EcommerceFeatureChip } from "./EcommerceFeatureChip";
import { EcommercePricingPlans } from "./EcommercePricingPlans";
import { EcommercePricingPlansShowMore } from "./EcommercePricingPlansShowMore";

type TProps = {
  handleScroll: () => void;
};

export const EcommercePricingPlansSection: FunctionComponent<TProps> = ({
  handleScroll,
}) => {
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
          <EcommerceFeatureChip text="99.9% uptime SLA" />
          <EcommerceFeatureChip text="SSL certificate" />
          <EcommerceFeatureChip text="DDoS protection" />
          <EcommerceFeatureChip text="Automatic Medusa core updates" />
        </div>
        <EcommercePricingPlansShowMore>
          <EcommercePricingPlans handleScroll={handleScroll} />
        </EcommercePricingPlansShowMore>
      </div>
    </Section>
  );
};
