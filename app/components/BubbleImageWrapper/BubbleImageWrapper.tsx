import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";

type TProps = {
  title: ReactNode;
  children: ReactNode;
  imageSrc: StaticImageData;
};

export const BubbleImageWrapper: FunctionComponent<TProps> = ({
  title,
  children,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="lg:w-1/2 w-full">{title}</div>
      <div className="flex md:gap-16">
        {children}
        <div className="relative md:w-1/2">
          <Image
            src={imageSrc}
            objectFit={"none"}
            alt="bubble"
            className="absolute left-0 top-0"
          />
        </div>
      </div>
    </div>
  );
};
