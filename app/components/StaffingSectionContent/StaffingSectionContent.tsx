import { FeedbackForm, H2, Section, UnderlineText } from "components";

export const StaffingSectionContent = () => {
  return (
    <Section>
      <div className="flex gap-10 items-center">
        <UnderlineText
          text="Get the best developers, without all the stress"
          isRedText={false}
        />
        <div className="w-full py-[60px] px-4 flex flex-col items-center gap-[60px] rounded-2xl bg-primary bg-opacity-50">
          <H2>Get Started</H2>
          <FeedbackForm
            buttonText="Book a call now"
            buttonClassName="bg-accent hover:bg-white hover:text-accent transition-all"
            buttonPosition="justify-center"
          />
        </div>
      </div>
    </Section>
  );
};
