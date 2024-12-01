import { FunctionComponent } from "react";

import { cn } from "@utils/cn";

import { unbounded } from "../../fonts/unbounded";

import styles from "./h2.module.scss";

type TProps = {
  children: string;
  isText?: boolean;
  className?: string;
};

export const H2: FunctionComponent<TProps> = ({
  children,
  isText,
  className: propsClassName,
  ...props
}) => {
  const componentClassName = cn(
    styles.component,
    propsClassName,
    unbounded.className,
  );

  return isText ? (
    <span className={componentClassName} {...props}>
      {children}
    </span>
  ) : (
    <h2 className={componentClassName} {...props}>
      {children}
    </h2>
  );
};
