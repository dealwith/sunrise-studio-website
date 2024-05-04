import { cn } from "@utils/cn";
import { FunctionComponent } from "react";
import { Button } from "./Button";

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

  return (
    <Button className={buttonClassName}>
      {children} <ButtonArrow width={width} height={height} />
    </Button>
  );
};
