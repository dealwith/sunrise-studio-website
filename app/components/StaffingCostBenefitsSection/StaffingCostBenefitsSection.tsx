import {
  ArrowButton,
  BubbleImageWrapper,
  P,
  Section,
  UnderlineText,
} from "components";

import employeeSrc from "./img/employee.png";

export const StaffingCostBenefitsSection = () => {
  return (
    <Section>
      <BubbleImageWrapper
        imageSrc={employeeSrc}
        title={
          <UnderlineText
            text="Sunrise Studio saves you on expensive staffing costs and project headaches"
            isRedText={true}
            imageClassName="lg:w-fit md:w-[200px] w-[120px] mt-6 self-end"
          />
        }
        isReversed={true}
      >
        <div className="flex flex-col gap-10">
          <P className="lg:!text-3xl md:!text-xl">
            We provide skilled developers at rates well below $90/hour, reducing
            client costs without compromising quality.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            Our team handles staffing, enabling non-technical clients to connect
            with qualified developers confidently.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            We streamline hiring by quickly connecting clients with vetted
            developers.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            Our flexible staffing solutions allow easy team scaling based on
            project demands.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            Our contractor model lets businesses adapt to changing project needs
            without permanent hires.
          </P>
          <a href="#contactUs">
            <ArrowButton
              className="bg-accent whitespace-nowrap text-white hover:bg-white hover:text-accent transition-all"
              width="10px"
              height="10px"
            >
              Talk to us
            </ArrowButton>
          </a>
        </div>
      </BubbleImageWrapper>
    </Section>
  );
};
