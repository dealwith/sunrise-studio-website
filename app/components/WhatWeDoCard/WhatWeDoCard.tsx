import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import { P } from "components";
import { cn } from "utils/cn";

type TProps = {
  title: string;
  text: string;
  image: StaticImageData;
  number: number;
};

export const WhatWeDoCard: FunctionComponent<TProps> = ({
  title,
  text,
  image,
  number,
}) => {
  const isOddCard = number % 2 !== 0;
  const containerClassName = cn(
    isOddCard ? "bg-white" : "bg-accent",
    "flex gap-3 lg:gap-6 pl-6 py-8 pr-9 rounded-2xl",
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
      <div className="flex flex-col gap-5">
        <h3 className={titleClassName}>{title}</h3>
        <P className={textClassName}>{text}</P>
      </div>
      <Image className="h-[69px]" src={image} alt="logo" />
    </div>
  );
};
