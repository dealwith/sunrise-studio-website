import { FunctionComponent } from "react";

import { cn } from "utils/cn";

type TProps = {
  children: string;
  isText?: boolean;
  className?: string;
};

export const H5: FunctionComponent<TProps> = ({
  children,
  isText,
  className: propsClassName,
  ...props
}) => {
  const componentClassName = cn("sm:text-4xl text-2xl", propsClassName);

  return isText ? (
    <span className={componentClassName} {...props}>
      {children}
    </span>
  ) : (
    <h5 className={componentClassName} {...props}>
      {children}
    </h5>
  );
};
