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
  size?: "l" | "m" | "none" | "filter";
  variant?: "filter";
  className?: string;
} & HTMLButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, size, className: propsClassName, variant, ...props }, ref) => {
    const buttonSize = cn({
      [styles.sizeL]: size === "l",
      ["rounded-2xl py-3 px-11 w-full mobileM:w-fit flex justify-center"]:
        size === "m",
      [styles.sizeNone]: size === "none",
    });

    const buttonVariant = cn({
      ["bg-accent hover:bg-red-600 ease-in duration-300 !font-normal lg:py-5 lg:px-6 md:py-[13px] py-[15px] px-4 lg:text-2xl md:text-base text-sm"]:
        variant === "filter",
    });

    const buttonClassName = cn(
      styles.component,
      buttonSize,
      buttonVariant,
      propsClassName,
    );

    return (
      <button className={buttonClassName} {...props} {...ref}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
