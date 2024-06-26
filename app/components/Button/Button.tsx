import {
  ReactNode,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";

import { cn } from "@utils/cn";

import styles from "./button.module.scss";

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = {
  children?: ReactNode;
  size?: "l" | "m" | "none";
  className?: string;
} & HTMLButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, size, className: propsClassName, ...props }, ref) => {
    const buttonSize = cn({
      [styles.sizeL]: size === "l",
      ["rounded-2xl py-3 px-11 w-full mobileM:w-fit flex justify-center"]:
        size === "m",
      [styles.sizeNone]: size === "none",
    });

    const buttonClassName = cn(styles.component, buttonSize, propsClassName);

    return (
      <button className={buttonClassName} {...props} {...ref}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
