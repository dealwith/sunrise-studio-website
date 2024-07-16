import { cn } from "utils/cn";
import { FunctionComponent } from "react";

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
  const componentClassName = cn("sm:text-4xl text-[26px]", propsClassName);

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
