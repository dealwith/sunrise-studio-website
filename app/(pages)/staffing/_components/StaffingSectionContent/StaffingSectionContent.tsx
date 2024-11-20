import { CalendlyWidget, Section, UnderlineText } from "components";

export const StaffingSectionContent = () => {
  return (
    <Section>
      <div className="flex gap-8 items-center md:flex-row flex-col">
        <UnderlineText
          text="Get the best developers, without all the stress"
          isRedText={false}
          textClassName="md:text-start text-center"
          imageClassName="mt-6"
        />
        <div className="w-full lg:px-[60px] px-6 pt-6 pb-14 flex flex-col items-center gap-3 rounded-2xl bg-primary bg-opacity-50">
          <h2 className="md:text-3xl text-2xl text-center font-unbounded">
            Schedule a call with us
          </h2>
          <CalendlyWidget />
        </div>
      </div>
    </Section>
  );
};
