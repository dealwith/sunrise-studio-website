import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";

type TProps = {
  title: ReactNode;
  children: ReactNode;
  imageSrc: StaticImageData;
  isReversed?: boolean;
};

export const BubbleImageWrapper: FunctionComponent<TProps> = ({
  title,
  children,
  imageSrc,
  isReversed,
}) => {
  const containerClassName = `flex md:gap-10 ${isReversed ? "flex-row-reverse" : "flex-row"}`;

  return (
    <div className={containerClassName}>
      <div className="flex flex-col gap-10 md:w-1/2 w-full">
        {title}
        {children}
      </div>
      <div className="relative md:w-1/2">
        <Image
          src={imageSrc}
          alt="bubble"
          className="absolute left-0 inset-y-[40%]"
        />
      </div>
    </div>
  );
};
