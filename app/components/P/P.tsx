import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

import styles from "./p.module.scss";

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
	const componentClassName = classNames(styles.component, propsClassName);

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
