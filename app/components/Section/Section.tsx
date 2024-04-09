import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

import styles from "./section.module.scss";

type TProps = {
  children: ReactNode;
  className?: string;
};

export const Section: FunctionComponent<TProps> = ({
  children,
  className: propsClassName,
}) => {
  const sectionClassName = classNames(styles.component, propsClassName);

  return <section className={sectionClassName}>{children}</section>;
};
