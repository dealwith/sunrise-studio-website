import classNames from "classnames";
import {
	ReactNode,
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	forwardRef
} from "react";

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
		const buttonSize = classNames({
			[styles.sizeL]: size === "l",
			[styles.sizeM]: size === "m",
			[styles.sizeNone]: size === "none"
		});

		const buttonClassName = classNames(
			styles.component,
			buttonSize,
			propsClassName
		);

		return (
			<button className={buttonClassName} {...props} {...ref}>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";
