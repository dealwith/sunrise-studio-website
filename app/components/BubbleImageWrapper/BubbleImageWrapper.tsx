import { cn } from "@utils/cn";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";

type TProps = {
  title: ReactNode;
  description: ReactNode;
  imageSrc: StaticImageData;
  isReversed?: boolean;
};

export const StuffingAdvantages: FunctionComponent<TProps> = ({
  title,
  imageSrc,
  description,
}) => {
  const containerCN = cn("grid grid-cols-2 grid-rows-2 md:gap-10");

  return (
    <div className={containerCN}>
      {title}
      {description}
      <div className="relative">
        <Image src={imageSrc} alt="bubble" className="" />
      </div>
    </div>
  );
};
