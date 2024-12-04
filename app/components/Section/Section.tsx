import { FunctionComponent, ReactNode } from "react";

import { cn } from "@utils/cn";

import styles from "./section.module.scss";

type TProps = {
  children: ReactNode;
  className?: string;
};

export const Section: FunctionComponent<TProps> = ({
  children,
  className: propsClassName,
}) => {
  const sectionClassName = cn(styles.component, propsClassName);

  return <section className={sectionClassName}>{children}</section>;
};
