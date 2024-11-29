import { cn } from "utils/cn";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";
import { useWindowSize } from "hooks";

type TProps = {
  title: ReactNode;
  description: ReactNode;
  imageSrc: StaticImageData;
  button?: ReactNode;
  isReversed?: boolean;
};

export const StaffingAdvantages: FunctionComponent<TProps> = ({
  title,
  imageSrc,
  description,
  button,
  isReversed,
}) => {
  const { isLaptopS } = useWindowSize();
  const containerCN = cn("grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4");
  const titleCN = cn(isReversed ? "md:col-start-2" : "md:col-start-1");
  const descriptionCN = cn(
    "flex flex-col lg:gap-10 gap-4",
    isReversed ? "md:col-start-2" : "md:col-start-1",
  );
  const imageContainerCN = cn(
    "flex flex-col gap-4 md:row-start-2",
    isReversed ? "md:col-start-1" : "md:col-start-2",
  );

  return (
    <div className={containerCN}>
      <div className={titleCN}>{title}</div>
      <div className={descriptionCN}>
        {description} {!isLaptopS && button}
      </div>
      <div className={imageContainerCN}>
        <Image src={imageSrc} alt="bubble" />
        {isLaptopS && button}
      </div>
    </div>
  );
};
