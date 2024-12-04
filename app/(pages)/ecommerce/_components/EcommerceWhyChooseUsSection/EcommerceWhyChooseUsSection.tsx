import { motion } from "framer-motion";

import { H2, P, Section, WhatWeBuildCard } from "components";
import { useWindowSize } from "hooks";

import firstCardLineSrc from "./img/firstCardLine.png";
import fourthCardLineSrc from "./img/fourthCardLine.png";
import secondCardLineSrc from "./img/secondCardLine.png";
import thirdCardLineSrc from "./img/thirdCardLine.png";

export const EcommerceWhyChooseUsSection = () => {
  const advantages = [
    {
      title: "Experience and Professionalism",
      text: "Our team consists of experienced developers, designers, and marketers who know how to create a successful e-commerce project",
      image: firstCardLineSrc,
    },
    {
      title: "Individual Approach",
      text: "We take into account all your wishes and needs to create a website that perfectly suits your business",
      image: secondCardLineSrc,
    },
    {
      title: "Modern Technologies",
      text: "We use the latest technologies and tools for development to ensure your website is fast, secure, and user-friendly",
      image: thirdCardLineSrc,
    },
    {
      title: "Results that Speak for Themselves",
      text: "Our clients note a significant increase in sales and improved user experience after launching our solutions",
      image: fourthCardLineSrc,
    },
  ];
  const { width, isLaptopS } = useWindowSize();
  const cardWidth = 298;
  const gapWidth = 24;
  const paddings = isLaptopS ? 50 : 100;
  const availableWidth = width ? width - paddings : 0;
  const totalContentWidth =
    advantages.length * (cardWidth + gapWidth) - gapWidth;

  const dragConstraints = {
    right: 0,
    left:
      width && totalContentWidth > availableWidth
        ? -(totalContentWidth - availableWidth)
        : 0,
  };

  return (
    <Section>
      <H2>Why choose us?</H2>
      <motion.div
        className="flex gap-6 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        {advantages.map((advantage) => (
          <WhatWeBuildCard
            key={advantage.title}
            title={advantage.title}
            image={advantage.image}
            className="h-[450px] min-w-[298px]"
          >
            <P className="text-black">{advantage.text}</P>
          </WhatWeBuildCard>
        ))}
      </motion.div>
    </Section>
  );
};
