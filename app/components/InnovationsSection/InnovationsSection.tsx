import { InnovationCard } from "./InnovationCard";

export const InnovationsSection = () => {
  return (
    <section className="flex flex-col items-center lg:my-[120px] sm:my-[100px] my-[60px] md:gap-[60px] gap-6">
      <h2 className="sm:w-fit w-full lg:text-[52px] md:text-[42px] text-[26px] font-unbounded">
        How we work
      </h2>
      <div className="flex flex-col lg:gap-[70px] md:gap-10 gap-8 w-full">
        <InnovationCard number="1" title="Research" className="md:self-start">
          t’s all about creativity and originality. That’s the key to making a
          splash in any field. Being too stuffy and serious just won’t cut it
          anymore. If you want your brand to be aspirational and exclusive, you
          gotta show some personality and dare to be different.
        </InnovationCard>
        <InnovationCard number="2" title="Design" className="md:self-center">
          t’s all about creativity and originality. That’s the key to making a
          splash in any field. Being too stuffy and serious just won’t cut it
          anymore. If you want your brand to be aspirational and exclusive, you
          gotta show some personality and dare to be different.
        </InnovationCard>
        <InnovationCard number="3" title="Develop" className="md:self-end">
          t’s all about creativity and originality. That’s the key to making a
          splash in any field. Being too stuffy and serious just won’t cut it
          anymore. If you want your brand to be aspirational and exclusive, you
          gotta show some personality and dare to be different.
        </InnovationCard>
      </div>
    </section>
  );
};
