import classNames from "classnames";
import { FunctionComponent } from "react";

import styles from "./h4.module.scss";

type TProps = {
	children: string;
	isText?: boolean;
	className?: string;
};

export const H4: FunctionComponent<TProps> = ({
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
		<h3 className={componentClassName} {...props}>
			{children}
		</h3>
	);
};
