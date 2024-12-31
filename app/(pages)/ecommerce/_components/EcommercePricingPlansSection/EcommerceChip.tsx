import { FunctionComponent } from "react";

import useToggle from "hooks/useToggle";

import { CheckIcon } from "./img/CheckIcon";

type TProps = {
  text: string;
};

export const EcommerceChip: FunctionComponent<TProps> = ({ text }) => {
  const [isHovered, toggleHover] = useToggle();

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="hover:cursor-pointer text-white hover:text-accent duration-300 flex gap-2 md:text-2xl text-sm font-unbounded py-3.5 px-7 whitespace-nowrap rounded-full bg-accent hover:bg-white items-center"
    >
      <CheckIcon isHovered={isHovered} />
      <p>{text}</p>
    </div>
  );
};
