import { H2, Section, WhoWeWorkWithCard } from "components";

export const WhoWeWorkWithSection = () => {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <H2>Testimonials</H2>
        {/* <div className="flex gap-2.5">
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
        </div> */}
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <WhoWeWorkWithCard
          image="https://media.licdn.com/dms/image/C4D03AQG9sizcSlGPrA/profile-displayphoto-shrink_200_200/0/1607362460916?e=1724889600&v=beta&t=iWSNaqNJuu4uhXE1MEXmUMB7IqTgcbMdstj_aqsvlQc"
          title="Alexey Lukyanchik"
          subtitle="Marketing & PR Director"
          projectUrl="https://leaderboard.paragonevents.gg/?o=6516c8527df610c311ee705a&c=65d8b870b69baa8bbf9295d9&r=paragon-dls22&p=twitch"
          feedbackGiverUrl="https://www.linkedin.com/in/alexeilukianchik"
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
      </div>
    </Section>
  );
};
