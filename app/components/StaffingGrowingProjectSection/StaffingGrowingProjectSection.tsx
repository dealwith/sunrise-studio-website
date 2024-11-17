import { StuffingAdvantages, P, Section, UnderlineText } from "components";

import employeeSrc from "./img/employee.png";

export const StaffingGrowingProjectSection = () => {
  return (
    <Section>
      <StuffingAdvantages
        imageSrc={employeeSrc}
        title={
          <UnderlineText
            text="Growing your project can be very complex, and time consuming"
            isRedText={true}
            imageClassName="lg:w-fit md:w-[200px] w-[120px] mt-6"
          />
        }
      >
        <div className="flex flex-col gap-10">
          <P className="lg:!text-3xl md:!text-xl">
            ❌ Skilled developers cost average $90/hour.
          </P>
          <P className="lg:text-3xl md:text-xl">
            ❌ Non-technical clients struggle to staff development teams.
          </P>
          <P className="lg:text-3xl md:text-xl">
            ❌ Finding the right developers takes time.
          </P>
          <P className="lg:text-3xl md:text-xl">
            ❌ Scaling teams for growing demands is tough.
          </P>
          <P className="lg:!text-3xl md:!text-xl">
            ❌ Adapting staffing for fluctuating demands is challenging.
          </P>
        </div>
      </StuffingAdvantages>
    </Section>
  );
};
