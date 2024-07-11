import { FunctionComponent } from "react";

type TProps = {
  children: string;
};

export const Chip: FunctionComponent<TProps> = ({ children }) => {
  return (
    <div className="lg:text-xl sm:text-base text-sm lg:py-2.5 lg:px-[18px] sm:py-2.5 sm:px-2.5 py-2 px-2 whitespace-nowrap bg-white text-accent font-medium ease-in duration-300 rounded-2xl hover:cursor-pointer hover:bg-black hover:text-white">
      {children}
    </div>
  );
};
