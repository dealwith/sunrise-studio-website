import { FunctionComponent, ReactNode } from "react";

import { cn } from "utils/cn";

type TProps = {
  children: string | ReactNode;
  isText?: boolean;
  className?: string;
};

export const P: FunctionComponent<TProps> = ({
  children,
  isText,
  className: propsClassName,
  ...props
}) => {
  const componentClassName = cn("text-base font-normal", propsClassName);

  return isText ? (
    <span className={componentClassName} {...props}>
      {children}
    </span>
  ) : (
    <p className={componentClassName} {...props}>
      {children}
    </p>
  );
};
