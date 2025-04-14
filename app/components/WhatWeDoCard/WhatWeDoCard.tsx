import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import { P } from "components";
import { COLORS } from "constants/index";
import { cn } from "utils/cn";

import { BoxArrow } from "./img/BoxArrow";

type TProps = {
  title: string;
  text: string;
  image: StaticImageData;
  number: number;
  href: string;
};

export const WhatWeDoCard: FunctionComponent<TProps> = ({
  title,
  text,
  image,
  number,
  href,
}) => {
  const isOddCard = number % 2 !== 0;
  const containerClassName = cn(
    isOddCard ? "bg-white" : "bg-accent",
    "flex gap-3 lg:gap-6 pl-6 py-8 pr-9 rounded-2xl w-full",
  );
  const titleClassName = cn(
    isOddCard ? "text-accent" : "text-white",
    "text-2xl font-light",
  );
  const textClassName = cn(
    isOddCard ? "text-black" : "text-white",
    "text-lg font-light",
  );

  return (
    <div className={containerClassName}>
      <div className="flex flex-col gap-5 w-full">
        <h3 className={titleClassName}>{title}</h3>
        <P className={textClassName}>{text}</P>
      </div>
      <div className="flex flex-col gap-5 justify-between items-end">
        <Image width={69} src={image} alt="logo" />
        <Link href={href}>
          <BoxArrow color={isOddCard ? COLORS.RED : COLORS.WHITE} />
        </Link>
      </div>
    </div>
  );
};
