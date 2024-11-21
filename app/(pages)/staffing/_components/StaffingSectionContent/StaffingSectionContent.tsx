import { CalendlyWidget, Section, UnderlineText } from "components";

export const StaffingSectionContent = () => {
  return (
    <Section>
      <div className="flex md:gap-8 gap-4 items-center md:flex-row flex-col">
        <UnderlineText
          text="Get the best developers, without all the stress"
          isRedText={false}
          textClassName="md:text-start text-center"
          imageClassName="md:mt-6 mt-3"
        />
        <div className="flex pt-6 flex-col items-center gap-3 rounded-2xl bg-primary max-w-[500px] w-full">
          <h2 className="md:text-3xl text-2xl text-center font-unbounded px-3">
            Schedule a call with us
          </h2>
          <CalendlyWidget />
        </div>
      </div>
    </Section>
  );
};
