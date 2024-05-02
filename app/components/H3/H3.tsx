import { cn } from "@utils/cn";
import { FunctionComponent } from "react";
import { unbounded } from "../../fonts/unbounded";

import styles from "./h3.module.scss";

type TProps = {
  children: string;
  isText?: boolean;
  className?: string;
};

export const H3: FunctionComponent<TProps> = ({
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
    <h3 className={componentClassName} {...props}>
      {children}
    </h3>
  );
};
