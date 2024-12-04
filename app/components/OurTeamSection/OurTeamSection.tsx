import fifthImageSrc from "./img/fifthImage.jpg";
import firstImageSrc from "./img/firstImage.jpg";
import fourthImageSrc from "./img/fourthImage.jpg";
import secondImageSrc from "./img/secondImage.jpg";
import sixthImageSrc from "./img/sixthImage.jpg";
import thirdImageSrc from "./img/thirdImage.jpg";
import { OurTeamCard } from "./OurTeamCard";

export const OurTeamSection = () => {
  return (
    <section className="flex lg:mt-[541px] md:mt-[440px] mt-[272px] gap-6 flex-wrap items-center">
      <div className="w-[calc(50%-12px)]">
        <h2 className="font-unbounded lg:text-5xl md:text-3xl text-2xl uppercase">
          We&apos;re here to turn your ideas into reality, anytime you need us.
        </h2>
      </div>
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
    </section>
  );
};
