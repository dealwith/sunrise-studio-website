"use client";
import useToggle from "hooks/useToggle";
import { Button } from "./Button";
import { ScrollIcon } from "./img/ScrollIcon";
import { MouseEventHandler } from "react";
import classNames from "classnames";

import styles from "./button.module.scss";

type Props = {
	defaultColor: string;
	hoverColor: string;
	className?: string;
};

export const ScrollButton = ({
	defaultColor,
	hoverColor,
	className: propsClassName
}: Props) => {
	const buttonClassName = classNames(styles.scrollBtn, propsClassName);
	const [isHovered, setHovered] = useToggle();

	return (
		<Button
			onMouseEnter={setHovered as MouseEventHandler<HTMLButtonElement>}
			onMouseLeave={setHovered as MouseEventHandler<HTMLButtonElement>}
			className={buttonClassName}
		>
			<ScrollIcon
				isHovered={isHovered}
				defaultColor={defaultColor}
				hoverColor={hoverColor}
			/>
		</Button>
	);
};
