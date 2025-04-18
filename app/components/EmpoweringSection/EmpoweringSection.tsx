import Link from "next/link";

import { ArrowButton, P } from "components";

export const EmpoweringSection = () => {
  return (
    <section className="relative">
      <div className="flex flex-col sm:items-start items-center gap-30 pt-14 pb-9">
        <P className="lg:!text-3xl md:!text-xl">
          Empowering Your Growth with Poland’s Finest Talent – Scale Faster,
          Innovate 10x More. From our team to yours, we deliver top-tier
          developers and flexible solutions to drive your digital projects to
          success.
        </P>
        <Link className="max-w-[400px] w-full sm:w-fit" href="#contactUs">
          <ArrowButton
            width="14px"
            height="14px"
            className="sm:w-fit w-full px-11 flex justify-center bg-primary whitespace-nowrap text-white hover:bg-white hover:text-accent transition-all"
          >
            Talk to us
          </ArrowButton>
        </Link>
      </div>
    </section>
  );
};
