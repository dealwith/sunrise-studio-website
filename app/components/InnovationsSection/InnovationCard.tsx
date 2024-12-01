import { FunctionComponent } from "react";

import { H5 } from "components";
import { cn } from "utils/cn";

type TProps = {
  number: string;
  title: string;
  children: string;
  className?: string;
};

export const InnovationCard: FunctionComponent<TProps> = ({
  number,
  title,
  children,
  className: propsClassName,
}) => {
  const containerClassName = cn(
    "md:w-[659px] w-full grid grid-cols-[auto,1fr] items-center md:gap-x-6 gap-4",
    propsClassName,
  );

  return (
    <div className={containerClassName}>
      <div className="md:row-start-1 md:row-end-3 row-start-1 row-end-1 md:text-4xl text-2xl font-unboundedMedium flex justify-center items-center bg-accent rounded-full md:w-28 w-11 md:h-28 h-11">
        {number}
      </div>
      <H5 className="md:text-4xl sm:text-2xl font-unboundedMedium">{title}</H5>
      <p className="md:col-start-2 col-start-1 col-end-3 text-base lg:text-xl font-light">
        {children}
      </p>
    </div>
  );
};
