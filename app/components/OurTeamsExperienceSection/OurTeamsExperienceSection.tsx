import styles from "./ourTeamsExperienceSection.module.scss";

export const OurTeamsExperienceSection = () => {
  return (
    <section className={styles.component}>
      <h2 className="text-[26px] md:text-[40px] lg:text-[52px] font-unbounded font-light">
        Our team&apos;s experience helps you find the best{" "}
        <div className={styles.textBg}>developers</div> around the world
      </h2>
    </section>
  );
};
