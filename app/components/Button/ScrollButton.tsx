"use client";
import useToggle from "hooks/useToggle";
import { Button } from "./Button";
import { ScrollIcon } from "./img/ScrollIcon";
import { MouseEventHandler } from "react";
import { cn } from "@utils/cn";

import styles from "./button.module.scss";

type Props = {
  defaultColor: string;
  hoverColor: string;
  className?: string;
  handleClick: () => void;
};

export const ScrollButton = ({
  defaultColor,
  hoverColor,
  className: propsClassName,
  handleClick,
}: Props) => {
  const buttonClassName = cn(styles.scrollBtn, propsClassName);
  const [isHovered, setHovered] = useToggle();

  return (
    <Button
      onMouseEnter={setHovered as MouseEventHandler<HTMLButtonElement>}
      onMouseLeave={setHovered as MouseEventHandler<HTMLButtonElement>}
      className={buttonClassName}
      onClick={handleClick}
    >
      <ScrollIcon
        isHovered={isHovered}
        defaultColor={defaultColor}
        hoverColor={hoverColor}
      />
    </Button>
  );
};
