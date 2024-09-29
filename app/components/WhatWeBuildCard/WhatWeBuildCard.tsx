import { FunctionComponent, ReactNode } from "react";
import { cn } from "utils/cn";

import styles from "./whatWeBuildCard.module.scss";

type TProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export const WhatWeBuildCard: FunctionComponent<TProps> = ({
  title,
  children,
  className: propsClassName,
}) => {
  const componentClassName = cn(styles.component, propsClassName);

  return (
    <div className={componentClassName}>
      {title && <h3 className="text-2xl font-light">{title}</h3>}
      {children}
    </div>
  );
};
