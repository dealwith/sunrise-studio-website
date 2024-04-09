import classNames from "classnames";
import { FunctionComponent } from "react";
import { unbounded } from "../../fonts/unbounded";

import styles from "./span.module.scss";

type TProps = {
  children: string;
  className?: string;
};

export const Span: FunctionComponent<TProps> = ({
  children,
  className: propsClassName,
  ...props
}) => {
  const componentClassName = classNames(
    styles.component,
    propsClassName,
    unbounded.className,
  );

  return (
    <span className={componentClassName} {...props}>
      {children}
    </span>
  );
};
