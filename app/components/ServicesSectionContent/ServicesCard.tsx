import { H5 } from "components";
import { FunctionComponent } from "react";

type TProps = {
  title: string;
  children: string;
};

export const ServicesCard: FunctionComponent<TProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col sm:gap-6 gap-4 lg:w-1/2 md:w-[47%] w-full">
      <H5 className="font-unboundedMedium">{title}</H5>
      <p className="text-base lg:text-xl font-light">{children}</p>
    </div>
  );
};
