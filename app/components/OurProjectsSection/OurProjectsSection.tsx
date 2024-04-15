import { H2, ImagesWrapper, Section } from "components";

export const OurProjectsSection = () => {
  return (
    <Section>
      <div id="projects" className="flex flex-col gap-[60px]">
        <H2>Our projects</H2>
        <ImagesWrapper />
      </div>
    </Section>
  );
};
