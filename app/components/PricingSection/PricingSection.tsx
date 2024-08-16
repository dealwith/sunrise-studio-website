import { H4, MobileNavigation, P } from "components";

export const PricingSection = () => {
  return (
    <section className="flex flex-col gap-[60px] lg:mt-48 sm:mt-44 mt-32 lg:mb-[120px] sm:mb-[100px] mb-[60px]">
      <h1 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-7xl xl:text-[80px] font-unboundedBold">
        Pricing
      </h1>
      <div className="bg-primary rounded-2xl py-[60px] px-4 w-full flex flex-col items-center">
        <H4 className="text-center">
          Select the Perfect Plan Tailored to Your Needs
        </H4>
        <P className="text-center w-4/5">
          Explore a variety of options designed to fit every budget and
          requirement. Whether you&apos;re just starting out or looking to
          scale, find the ideal solution that grows with you.
        </P>
      </div>
      <MobileNavigation />
    </section>
  );
};
