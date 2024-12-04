import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";

import { P } from "components";
import { cn } from "utils/cn";

type TProps = {
  title: string;
  text: string;
  image: StaticImageData;
  children?: ReactNode;
  number: number;
  className?: string;
};

export const EcommerceOurServicesCard: FunctionComponent<TProps> = ({
  title,
  text,
  image,
  children,
  number,
  className: propsClassName,
}) => {
  const isOddCard = number % 2 !== 0;
  const containerClassName = cn(
    propsClassName,
    isOddCard ? "bg-white" : "bg-black",
    "flex flex-col gap-[60px] lg:px-6 px-4 pt-[52px] md:h-[390px] h-[418px] rounded-2xl w-full",
  );
  const titleClassName = cn(
    isOddCard ? "text-black" : "text-white",
    "lg:text-xl font-unboundedBold",
  );
  const textClassName = cn(isOddCard ? "text-black" : "text-white");

  return (
    <div className={containerClassName}>
      <Image src={image} alt="image" />
      <div className="flex flex-col gap-5">
        <h3 className={titleClassName}>{title}</h3>
        <P className={textClassName}>{text}</P>
        {children}
      </div>
    </div>
  );
};
