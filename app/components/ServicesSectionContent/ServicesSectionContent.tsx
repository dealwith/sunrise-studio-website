import { Chip } from "components";
import { ServicesCard } from "./ServicesCard";

export const ServicesSectionContent = () => {
  return (
    <section className="flex flex-col items-center lg:gap-[120px] gap-[60px] lg:mt-48 sm:mt-44 mt-32 lg:mb-[120px] sm:mb-[100px] mb-[60px]">
      <h1 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-7xl xl:text-[80px] text-black font-unboundedBold">
        Some things that we can do for you
      </h1>
      <div className="flex flex-col lg:gap-16 gap-[42px]">
        <div className="flex lg:gap-20 gap-6 md:flex-row flex-col">
          <ServicesCard title="Design">
            t’s all about creativity and originality. That’s the key to making a
            splash in any field. Being too stuffy and serious just won’t cut it
            anymore. If you want your brand to be aspirational and exclusive,
            you gotta show some personality and dare to be different.
          </ServicesCard>
          <div className="flex flex-wrap lg:w-1/2 md:w-[53%] w-full lg:gap-3.5 sm:gap-2.5 gap-1.5 h-fit">
            <Chip>User experience design</Chip>
            <Chip>User interface</Chip>
            <Chip>Web design</Chip>
            <Chip>App</Chip>
            <Chip>Web design</Chip>
            <Chip>Web design</Chip>
            <Chip>Web design</Chip>
            <Chip>User experience design</Chip>
            <Chip>User interface</Chip>
            <Chip>Web design</Chip>
          </div>
        </div>
        <div className="flex lg:gap-20 gap-6 md:flex-row flex-col">
          <ServicesCard title="Strategy">
            t’s all about creativity and originality. That’s the key to making a
            splash in any field. Being too stuffy and serious just won’t cut it
            anymore. If you want your brand to be aspirational and exclusive,
            you gotta show some personality and dare to be different.
          </ServicesCard>
          <div className="flex flex-wrap lg:w-1/2 md:w-[53%] w-full lg:gap-3.5 sm:gap-2.5 gap-1.5 h-fit">
            <Chip>Business</Chip>
            <Chip>Content marketing</Chip>
            <Chip>Content strategy</Chip>
            <Chip>Posting</Chip>
            <Chip>Posting</Chip>
            <Chip>Content marketing</Chip>
            <Chip>Business</Chip>
            <Chip>Posting</Chip>
          </div>
        </div>
        <div className="flex lg:gap-20 gap-6 md:flex-row flex-col">
          <ServicesCard title="Development">
            t’s all about creativity and originality. That’s the key to making a
            splash in any field. Being too stuffy and serious just won’t cut it
            anymore. If you want your brand to be aspirational and exclusive,
            you gotta show some personality and dare to be different.
          </ServicesCard>
          <div className="flex flex-wrap lg:w-1/2 md:w-[53%] w-full lg:gap-3.5 sm:gap-2.5 gap-1.5 h-fit">
            <Chip>HTML & CSS</Chip>
            <Chip>Javascript</Chip>
            <Chip>Three JS</Chip>
            <Chip>Webflow</Chip>
          </div>
        </div>
      </div>
    </section>
  );
};
