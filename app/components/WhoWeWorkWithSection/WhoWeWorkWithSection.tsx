import { H2, ScrollButton, Section, WhoWeWorkWithCard } from "components";
import { COLORS } from "constants/index";

import styles from "./whoWeWorkWithSection.module.scss";
import firstImageSrc from "./img/firstImage.jpg";
import secondImageSrc from "./img/SecondImage.jpg";
import thirdImageSrc from "./img/thirdImage.jpg";

export const WhoWeWorkWithSection = () => {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <H2>Who we work with</H2>
        <div className="flex gap-2.5">
          <ScrollButton
            className={styles.btn}
            defaultColor={COLORS.RED}
            hoverColor={COLORS.WHITE}
          />
          <ScrollButton
            className={styles.btn}
            defaultColor={COLORS.RED}
            hoverColor={COLORS.WHITE}
          />
        </div>
      </div>
      <div className="flex gap-8">
        <WhoWeWorkWithCard
          image={firstImageSrc}
          title="Alexey Lukyanchik"
          subtitle="Marketing & PR Director"
          url={"https://leaderboard.paragonevents.gg/"}
        >
          We had a productive collaboration with Sunrise studio on the landing
          page and its mechanics for one of our products. We attracted over
          50,000 users to the product. It was pleasant that despite this being
          our first joint project, communication between us flowed as if we had
          been working together for quite some time. Sunrise studio always
          strived and consistently met all our deadlines, even when we faced
          extraordinary, unforeseen circumstances, making it almost an
          impossible mission.
        </WhoWeWorkWithCard>
        <WhoWeWorkWithCard
          image={secondImageSrc}
          title="Ava Reynolds"
          subtitle="Ceo of bnnjbkl"
          url={"https://sunrise-studio-website.vercel.app/"}
        >
          Incredible Creativity, Seamless Process: [Digital Agency Name] excels
          in creativity and professionalism. They effortlessly translated our
          vision into a visually stunning website. Seamless communication and a
          receptive approach to feedback made the process a breeze.
        </WhoWeWorkWithCard>
        <WhoWeWorkWithCard
          image={thirdImageSrc}
          title="Ava Reynolds"
          subtitle="Ceo of bnnjbkl"
          url={"https://sunrise-studio-website.vercel.app/"}
        >
          Incredible Creativity, Seamless Process: [Digital Agency Name] excels
          in creativity and professionalism. They effortlessly translated our
          vision into a visually stunning website. Seamless communication and a
          receptive approach to feedback made the process a breeze.
        </WhoWeWorkWithCard>
      </div>
    </Section>
  );
};
