import { cn } from "utils/cn";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";

type TProps = {
  title: ReactNode;
  description: ReactNode;
  imageSrc: StaticImageData;
  isReversed?: boolean;
};

export const StaffingAdvantages: FunctionComponent<TProps> = ({
  title,
  imageSrc,
  description,
  isReversed,
}) => {
  const containerCN = cn("grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4");
  const titleCN = cn(isReversed ? "md:col-start-2" : "md:col-start-1");
  const descriptionCN = cn(isReversed ? "md:col-start-2" : "md:col-start-1");
  const imageCN = cn(
    "md:row-start-2",
    isReversed ? "md:col-start-1" : "md:col-start-2",
  );

  return (
    <div className={containerCN}>
      <div className={titleCN}>{title}</div>
      <div className={descriptionCN}>{description}</div>
      <Image src={imageSrc} alt="bubble" className={imageCN} />
    </div>
  );
};
