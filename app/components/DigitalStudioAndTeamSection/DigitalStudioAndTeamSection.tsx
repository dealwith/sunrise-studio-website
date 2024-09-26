import { P } from "components";

export const DigitalStudioAndTeamSection = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex md:flex-row flex-col md:gap-8 gap-6 lg:mb-40 md:mb-24 mb-14">
        <h2 className="w-full lg:text-4xl md:text-3xl text-2xl font-unbounded">
          A digital studio is a creative space where technology converge to
          produce digital content.
        </h2>
        <div className="w-full flex flex-col gap-4">
          <P className="lg:text-xl font-light">
            The atmosphere in a digital studio is often dynamic and innovative,
            fostering a blend of technical proficiency and imaginative thinking.
            It&apos;s a place where ideas flourish and evolve, driven by a
            combination of technical prowess, creativity, and a deep
            understanding of digital tools.
          </P>
          <P className="lg:text-xl font-light">
            The atmosphere in a digital studio is often dynamic and innovative,
            fostering a blend of technical proficiency and imaginative thinking.
            It&apos;s a place where ideas flourish and evolve, driven by a
            combination of technical prowess, creativity, and a deep
            understanding of digital tools.
          </P>
        </div>
      </div>
      <div className="lg:w-7/12 md:w-8/12 w-full flex flex-col gap-6 self-start">
        <h2 className="w-full lg:text-4xl md:text-3xl text-2xl font-unbounded">
          Within a digital studio, teams
        </h2>
        <P className="lg:text-xl font-light">
          The atmosphere in a digital studio is often dynamic and innovative,
          fostering a blend of technical proficiency and imaginative thinking.
          It&apos;s a place where ideas flourish and evolve, driven by a
          combination of technical prowess, creativity, and a deep understanding
          of digital tools.
        </P>
      </div>
    </section>
  );
};
