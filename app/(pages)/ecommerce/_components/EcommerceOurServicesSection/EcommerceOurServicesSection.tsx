import { useState } from "react";
import {
  CarouselWrapper,
  H2,
  Section,
  ScrollButton,
  LogoSlider,
} from "components";
import { EcommerceOurServicesCard } from "./EcommerceOurServicesCard";
import { useWindowSize } from "hooks";
import { COLORS } from "constants/index";

import arrowsSrc from "./img/arrows.svg";
import clockSrc from "./img/clock.svg";
import tabSrc from "./img/tab.svg";
import settingsSrc from "./img/settings.svg";
import searchSrc from "./img/search.svg";
import cardSrc from "./img/card.svg";

export const EcommerceOurServicesSection = () => {
  const services = [
    {
      title: "E-commerce Website Development",
      text: "We create unique and functional online stores that attract customers and increase sales.",
      image: arrowsSrc,
      children: null,
      number: 1,
      className: "col-span-2 lg:col-span-1",
    },
    {
      title: "Performance Optimisation",
      text: "We ensure fast page loading and high performance for your website.",
      image: clockSrc,
      children: null,
      number: 2,
      className: "col-span-2 lg:col-span-1",
    },
    {
      title: "Payment System Integration",
      text: "We connect convenient and secure payment methods for your customers.",
      image: tabSrc,
      children: <LogoSlider />,
      number: 3,
      className: "col-span-3 lg:col-span-2",
    },
    {
      title: "Support and Maintenance",
      text: "We provide ongoing technical support and updates for your website.",
      image: settingsSrc,
      children: null,
      number: 4,
      className: "col-span-2 lg:col-span-1",
    },
    {
      title: "SEO and Marketing",
      text: "We help your website achieve top positions in search engines and attract more traffic by making it accessible and SEO optimised.",
      image: searchSrc,
      children: null,
      number: 5,
      className: "col-span-3 lg:col-span-2",
    },
    {
      title: "Manage Your Operations",
      text: "Control all processes of your online store from one convenient interface.",
      image: cardSrc,
      children: null,
      number: 6,
      className: "col-span-2 lg:col-span-1",
    },
  ];
  const { isLaptopS } = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNextSlideClick = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlideClick = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <Section className="lg:mb-[120px] md:mb-[100px] mb-[60px]">
      <div className="flex justify-between">
        <H2>Our services</H2>{" "}
        {isLaptopS && (
          <div className="flex gap-2.5">
            <ScrollButton
              className="border border-white hover:bg-white rotate-180"
              handleClick={handlePrevSlideClick}
              defaultColor={COLORS.WHITE}
              hoverColor={COLORS.BLACK}
            />
            <ScrollButton
              className="border border-white hover:bg-white"
              handleClick={handleNextSlideClick}
              defaultColor={COLORS.WHITE}
              hoverColor={COLORS.BLACK}
            />
          </div>
        )}
      </div>
      {isLaptopS ? (
        <CarouselWrapper currentIndex={currentIndex} direction={direction}>
          <EcommerceOurServicesCard
            title={services[currentIndex].title}
            text={services[currentIndex].text}
            image={services[currentIndex].image}
            number={services[currentIndex].number}
            className="w-full"
          >
            {services[currentIndex].children}
          </EcommerceOurServicesCard>
        </CarouselWrapper>
      ) : (
        <div className="grid grid-rows-2 grid-cols-7 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <EcommerceOurServicesCard
              key={service.title}
              title={service.title}
              text={service.text}
              image={service.image}
              number={service.number}
              className={service.className}
            >
              {service.children}
            </EcommerceOurServicesCard>
          ))}
        </div>
      )}
    </Section>
  );
};
