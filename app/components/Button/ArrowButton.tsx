import { cn } from "utils/cn";
import { FunctionComponent } from "react";
import { Button } from "./Button";
import useToggle from "hooks/useToggle";

import styles from "./button.module.scss";

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
  const buttonClassName = cn(styles.arrowBtn, propsClassName);
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
