import { Accordion, H2, Section } from "components";
import { FAQDescriptionData } from "data";

export const FAQSection = () => {
  return (
    <Section>
      <div id="FAQ" className="flex flex-col gap-[60px]">
        <H2>Frequently Asked Questions</H2>
        <Accordion data={FAQDescriptionData} />
      </div>
    </Section>
  );
};
