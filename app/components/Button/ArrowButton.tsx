import classNames from "classnames";
import Image from "next/image";
import { FunctionComponent } from "react";
import { Button } from "./Button";

import styles from "./button.module.scss";

import arrowSrc from "./img/arrow.svg";

type TProps = {
	children: String;
	className?: string;
};

export const ArrowButton: FunctionComponent<TProps> = ({
	children,
	className: propsClassName
}) => {
	const buttonClassName = classNames(styles.arrowBtn, propsClassName);

	return (
		<Button className={buttonClassName}>
			{children} <Image src={arrowSrc} alt="arrow" />
		</Button>
	);
};
