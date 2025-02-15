import { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScrollButton } from "components";
import { COLORS } from "constants/index";

import fifthImageSrc from "./img/fifthImage.jpg";
import firstImageSrc from "./img/firstImage.jpg";
import fourthImageSrc from "./img/fourthImage.jpg";
import secondImageSrc from "./img/secondImage.jpg";
import sixthImageSrc from "./img/sixthImage.jpg";
import thirdImageSrc from "./img/thirdImage.jpg";
import { OurTeamCard } from "./OurTeamCard";

export const OurTeamSection = () => {
  const slider = useRef<Slider>(null);

  const handlePrevClick = () => {
    slider.current?.slickPrev();
  };

  const handleNextClick = () => {
    slider.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1080, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="flex lg:mt-[541px] md:mt-[440px] mt-[272px] md:gap-16 gap-6 flex-wrap items-center">
      <div className="flex md:flex-row flex-col md:gap-16 gap-6 items-center">
        <h2 className="font-unbounded lg:text-5xl md:text-3xl text-2xl uppercase">
          We&apos;re here to turn your ideas into reality, anytime you need us.
        </h2>
        <div className="flex gap-2.5">
          <ScrollButton
            defaultColor={COLORS.RED}
            hoverColor={COLORS.WHITE}
            handleClick={handlePrevClick}
            className="border border-accent hover:bg-accent transition-all duration-300 rotate-180"
          />
          <ScrollButton
            defaultColor={COLORS.RED}
            hoverColor={COLORS.WHITE}
            handleClick={handleNextClick}
            className="border border-accent hover:bg-accent transition-all duration-300"
          />
        </div>
      </div>
      <Slider ref={slider} {...settings} className="w-full">
        <OurTeamCard image={firstImageSrc} name="Gleb Kryshyn" role="CEO" />
        <OurTeamCard
          image={secondImageSrc}
          name="Nicholas Jones"
          role="co-Founder"
        />
        <OurTeamCard
          image={thirdImageSrc}
          name="Julia Mazur"
          role="Head of Design"
        />
        <OurTeamCard
          image={fourthImageSrc}
          name="Magomed Yakhyaev"
          role="Software Engineer"
        />
        <OurTeamCard
          image={fifthImageSrc}
          name="Oleksandr Andriichuk"
          role="Software Engineer"
        />
        <OurTeamCard
          image={sixthImageSrc}
          name="Daria Marchanka"
          role="UI/UX Designer"
        />
      </Slider>
    </section>
  );
};
