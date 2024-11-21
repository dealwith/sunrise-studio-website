import { Section, UnderlineText, LiWithMarker } from "components";

import employeeSrc from "./img/employee.png";
import { StaffingAdvantages } from "../StaffingAdvantages";

export const StaffingGrowingProjectSection = () => {
  return (
    <Section>
      <StaffingAdvantages
        imageSrc={employeeSrc}
        title={
          <UnderlineText
            text="Growing your project can be very complex, and time consuming"
            isRedText={true}
            imageClassName="lg:w-fit md:w-[200px] w-[120px] mt-6"
          />
        }
        description={
          <ul className="flex flex-col lg:gap-10 gap-4">
            <LiWithMarker
              marker="❌"
              text="Skilled developers cost average $90/hour."
            />
            <LiWithMarker
              marker="❌"
              text="Non-technical clients struggle to staff development teams."
            />
            <LiWithMarker
              marker="❌"
              text="Finding the right developers takes time."
            />
            <LiWithMarker
              marker="❌"
              text="Scaling teams for growing demands is tough."
            />
            <LiWithMarker
              marker="❌"
              text="Adapting staffing for fluctuating demands is challenging."
            />
          </ul>
        }
      />
    </Section>
  );
};
