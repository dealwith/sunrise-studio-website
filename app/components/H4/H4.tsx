import { FunctionComponent } from "react";

import { cn } from "@utils/cn";

import styles from "./h4.module.scss";

type TProps = {
  children: string;
  isText?: boolean;
  className?: string;
};

export const H4: FunctionComponent<TProps> = ({
  children,
  isText,
  className: propsClassName,
  ...props
}) => {
  const componentClassName = cn(styles.component, propsClassName);

  return isText ? (
    <span className={componentClassName} {...props}>
      {children}
    </span>
  ) : (
    <h4 className={componentClassName} {...props}>
      {children}
    </h4>
  );
};
