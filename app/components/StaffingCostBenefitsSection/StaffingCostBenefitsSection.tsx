import {
  ArrowButton,
  StuffingAdvantages,
  Section,
  UnderlineText,
} from "components";

import employeeSrc from "./img/employee.png";

export const StaffingCostBenefitsSection = () => {
  return (
    <Section>
      <StuffingAdvantages
        imageSrc={employeeSrc}
        title={
          <UnderlineText
            text="Sunrise Studio saves you on expensive staffing costs and project headaches"
            isRedText={true}
            imageClassName="lg:w-fit md:w-[200px] w-[120px] mt-6 self-end"
          />
        }
        isReversed={true}
        description={
          <ul className="flex flex-col gap-10 col-start-1">
            <li className="lg:text-3xl md:text-xl">
              ✅ Skilled developers at rates well below $90/hour
            </li>
            <li className="lg:text-3xl md:text-xl">
              ✅ We handle staffing, enabling non-technical clients to connect
              with qualified developers confidently.
            </li>
            <li className="lg:text-3xl md:text-xl">
              ✅ Streamline hiring by quickly connecting clients with developers
            </li>
            <li className="lg:text-3xl md:text-xl">
              ✅ Scale based on project demands.
            </li>
            <li className="lg:text-3xl md:text-xl">
              ✅ We adapt to changing project needs without permanent hires.
            </li>
            <a href="#contactUs">
              <ArrowButton
                className="bg-accent whitespace-nowrap text-white hover:bg-white hover:text-accent transition-all"
                width="10px"
                height="10px"
              >
                Talk to us
              </ArrowButton>
            </a>
          </ul>
        }
      ></StuffingAdvantages>
    </Section>
  );
};
