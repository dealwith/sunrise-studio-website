import { InnovationCard } from "./InnovationCard";

const innovations = [
  {
    number: "1",
    title: "Research",
    description:
      "It’s all about creativity and originality.. That’s the key to making a splash in any field. Being too stuffy and serious just won’t cut it anymore. If you want your brand to be aspirational and exclusive, you gotta show some personality and dare to be different.",
    className: "md:self-start",
  },
  {
    number: "2",
    title: "Design",
    description:
      "It’s all about creativity and originality.. That’s the key to making a splash in any field. Being too stuffy and serious just won’t cut it anymore. If you want your brand to be aspirational and exclusive, you gotta show some personality and dare to be different.",
    className: "md:self-center",
  },
  {
    number: "3",
    title: "Develop",
    description:
      "It’s all about creativity and originality.. That’s the key to making a splash in any field. Being too stuffy and serious just won’t cut it anymore. If you want your brand to be aspirational and exclusive, you gotta show some personality and dare to be different.",
    className: "md:self-end",
  },
];

export const InnovationsSection = () => {
  return (
    <section className="flex flex-col items-center lg:mt-[120px] sm:mt-[100px] mt-[60px] md:gap-[60px] gap-6">
      <h2 className="sm:w-fit w-full lg:text-[52px] sm:text-[42px] text-[26px] font-unbounded">
        How we work
      </h2>
      <div className="flex flex-col lg:gap-[70px] md:gap-10 gap-8 w-full">
        {innovations.map((innovation) => (
          <InnovationCard
            key={innovation.number}
            number={innovation.number}
            title={innovation.title}
            className={innovation.className}
          >
            {innovation.description}
          </InnovationCard>
        ))}
      </div>
    </section>
  );
};
