import { BubbleImageWrapper, P, Section, UnderlineText } from "components";

import employeeSrc from "./img/employee.png";

export const StaffingGrowingProjectSection = () => {
  return (
    <Section>
      <BubbleImageWrapper
        imageSrc={employeeSrc}
        title={
          <UnderlineText
            text="Growing your project can be very complex, and time consuming"
            isRedText={true}
            imageClassName="lg:w-fit md:w-[200px] w-[120px] mt-6"
          />
        }
      >
        <div className="flex flex-col md:gap-10 gap-4">
          <P className="lg:!text-3xl md:!text-xl">
            High Costs: Skilled developers cost average $90/hour.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            Staffing Challenges: Non-technical clients struggle to staff
            development teams.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            Time-Consuming Hiring: Finding the right developers takes time.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            Scaling Issues: Scaling teams for growing demands is tough.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            Inflexible Staffing: Adapting staffing for fluctuating demands is
            challenging.
          </P>
        </div>
      </BubbleImageWrapper>
    </Section>
  );
};
