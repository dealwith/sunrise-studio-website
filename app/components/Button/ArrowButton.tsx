import { FunctionComponent } from "react";

import useToggle from "hooks/useToggle";
import { cn } from "utils/cn";

import { Button } from "./Button";
import { ButtonArrow } from "./img/ButtonArrow";

type TProps = {
  children: string;
  className?: string;
  width: string;
  height: string;
};

export const ArrowButton: FunctionComponent<TProps> = ({
  children,
  className: propsClassName,
  width,
  height,
}) => {
  const buttonClassName = cn(
    "rounded-2xl w-fit py-3 px-7 gap-3",
    propsClassName,
  );
  const [isHovered, toggleHover] = useToggle();

  return (
    <Button
      className={buttonClassName}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {children}{" "}
      <ButtonArrow isHovered={isHovered} width={width} height={height} />
    </Button>
  );
};
