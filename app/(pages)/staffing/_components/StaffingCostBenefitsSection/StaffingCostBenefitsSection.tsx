import {
  ArrowButton,
  LiWithMarker,
  Section,
  UnderlineTextMedium,
} from "components";

import { StaffingAdvantages } from "../StaffingAdvantages";

import employeeSrc from "./img/employee.png";

export const StaffingCostBenefitsSection = () => {
  return (
    <Section>
      <StaffingAdvantages
        imageSrc={employeeSrc}
        title={
          <UnderlineTextMedium
            text="Sunrise Studio saves you on expensive staffing costs and project headaches"
            isRedText={true}
            imageClassName="lg:w-fit md:w-[200px] w-[120px] mt-6 self-end"
          />
        }
        isReversed={true}
        description={
          <ul className="flex flex-col lg:gap-10 gap-4">
            <LiWithMarker
              marker="✅"
              text="Skilled developers at rates well below $90/hour."
            />
            <LiWithMarker
              marker="✅"
              text="We handle staffing, enabling non-technical clients to connect
              with qualified developers confidently."
            />
            <LiWithMarker
              marker="✅"
              text="Streamline hiring by quickly connecting clients with developers."
            />
            <LiWithMarker marker="✅" text="Scale based on project demands." />
            <LiWithMarker
              marker="✅"
              text="We adapt to changing project needs without permanent hires."
            />
          </ul>
        }
        button={
          <div className="w-full flex md:justify-start justify-center mt-5">
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
        }
      />
    </Section>
  );
};
