import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import { ChangeHandler } from "react-hook-form";

import { cn } from "@utils/cn";

import { onest } from "../../fonts/onest";

import styles from "./input.module.scss";

type TProps = {
  name: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  placeholder?: string;
  containerClassName?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, TProps>(
  (
    {
      placeholder,
      className: propsClassName,
      containerClassName,
      name,
      onChange,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const inputClassName = cn(
      styles.component,
      propsClassName,
      onest.className,
      "placeholder-gray-400",
    );

    return (
      <div className={containerClassName}>
        <input
          className={inputClassName}
          placeholder={placeholder}
          {...props}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
