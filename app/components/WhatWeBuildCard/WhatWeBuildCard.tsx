import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";
import { cn } from "utils/cn";

type TProps = {
  title?: string;
  children: ReactNode;
  image?: StaticImageData;
  className?: string;
};

export const WhatWeBuildCard: FunctionComponent<TProps> = ({
  title,
  children,
  image,
  className: propsClassName,
}) => {
  const componentClassName = cn(
    "relative w-full bg-white text-accent rounded-2xl p-6 flex flex-col gap-5",
    propsClassName,
  );

  return (
    <div className={componentClassName}>
      {title && <h3 className="text-2xl font-light">{title}</h3>}
      {children}
      {image && (
        <Image src={image} alt="line" className="absolute left-0 bottom-6" />
      )}
    </div>
  );
};
