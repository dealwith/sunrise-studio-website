import { useWindowSize } from "hooks";
import { H2, InnovationCard, Section } from "components";

const complexityHandlingData = [
  {
    number: "1",
    title: "Align",
    description:
      "We begin by thoroughly understanding your project's unique needs and objectives, ensuring that we have a clear vision of what you require. This involves in-depth discussions with your team to identify key goals, timelines, and any specific technical skills necessary for success.",
    className: "",
  },
  {
    number: "2",
    title: "Match",
    description:
      "Our dedicated team searches for and identifies professionals who perfectly fit your project requirements. We leverage our extensive network and rigorous vetting process to find developers with the right skill sets and experience, ensuring an optimal fit for your team.",
    className: "",
  },
  {
    number: "3",
    title: "Assign",
    description:
      "Once we have identified the ideal candidates, we seamlessly integrate the selected talent into your team. We handle all logistics, including onboarding, to ensure that the new developers are set up for success and can start contributing effectively from day one.",
    className: "",
  },
  {
    number: "4",
    title: "Maintain",
    description:
      "We continuously monitor the project's progress and the well-being of our developers to ensure ongoing success. This includes regular check-ins with both your team and our developers, addressing any challenges that arise and making adjustments as needed to keep the project on track.",
    className: "",
  },
];

export const StaffingComplexityHandlingSection = () => {
  const { isLaptopS } = useWindowSize();

  return (
    <Section>
      <div className="flex flex-col justify-between items-center md:gap-[60px] gap-6">
        <H2 className="text-center">
          We handle the complexity, while you focus on growth.
        </H2>
        <h3 className="font-unboundedLight md:text-4xl text-xl">
          How we do it
        </h3>
        <div className="flex flex-col lg:gap-[70px] md:gap-10 gap-8 relative">
          {!isLaptopS && (
            <div className="absolute h-[calc(100%-130px)] border-l-[3px] border-gray-200 md:left-14 top-16 -z-10"></div>
          )}
          {complexityHandlingData.map((complexityHandling) => (
            <InnovationCard
              key={complexityHandling.number}
              number={complexityHandling.number}
              title={complexityHandling.title}
              className={complexityHandling.className}
            >
              {complexityHandling.description}
            </InnovationCard>
          ))}
        </div>
      </div>
    </Section>
  );
};
