import { ROUTES } from "constants/index";
import { H2, Section, WhatWeDoCard } from "components";

import peopleSrc from "/public/images/people.svg";
import wrenchHammerSrc from "/public/images/wrenchHammer.svg";

export const WhatWeDoSection = () => {
  const activities = [
    {
      title: "Staffing Solutions",
      text: "We connect businesses with skilled developers worldwide. Whether you need a dedicated team or project-based expertise, we provide the right talent to support your goals—no matter where you're located.",
      image: peopleSrc,
      number: 1,
      href: ROUTES.STAFFING,
    },
    {
      title: "New Solutions",
      text: "We specialize in creating custom web solutions tailored to your needs. From concept to launch, our team of developers builds innovative digital platforms to drive your business forward.",
      image: wrenchHammerSrc,
      number: 2,
      href: ROUTES.BUILDING,
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-[60px]">
        <H2>What we do</H2>
        <div className="flex gap-3 lg:gap-6 md:flex-row flex-col">
          {activities.map((activity) => (
            <WhatWeDoCard
              key={activity.title}
              title={activity.title}
              text={activity.text}
              image={activity.image}
              number={activity.number}
              href={activity.href}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
