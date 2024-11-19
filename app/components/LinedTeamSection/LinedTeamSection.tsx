import Image from "next/image";

import lineSrc from "./img/line.png";

export const LinedTeamSection = () => {
  return (
    <section className="w-full md:h-[550px] h-[568px]">
      <h2 className="z-10 uppercase lg:w-1/2 md:w-9/12 w-[90%] lg:left-[40%] md:left-[15%] left-4 absolute md:mt-28 mt-24 lg:text-4xl md:text-3xl text-2xl font-unbounded">
        Your go-to team for creative and technical solutions. <i>whenever</i>
        <span> </span>
        you need them, and <i>however</i> you need them.
      </h2>
      <div className="mt-7 lg:w-full md:w-[135%] w-[220%] md:h-[550px] h-[568px] lg:left-0 md:-left-[35%] -left-[80%] absolute">
        <Image src={lineSrc} alt="line" className="w-full h-full" />
      </div>
    </section>
  );
};
