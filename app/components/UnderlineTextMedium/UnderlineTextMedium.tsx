import Image from "next/image";
import { FunctionComponent } from "react";

import { H5 } from "components";
import { cn } from "utils/cn";

import redUnderlineSrc from "./img/redUnderline.svg";
import whiteUnderlineSrc from "./img/whiteUnderline.svg";

type TProps = {
  isRedText?: boolean;
  text: string;
  textClassName?: string;
  imageClassName?: string;
};

export const UnderlineTextMedium: FunctionComponent<TProps> = ({
  isRedText,
  text,
  textClassName,
  imageClassName,
}) => {
  const underlineSrc = isRedText ? redUnderlineSrc : whiteUnderlineSrc;
  const textColor = isRedText ? "text-accent" : "text-white";
  const titleClassName = cn(textClassName, textColor);

  return (
    <div className="w-fit flex flex-col">
      <H5 className={titleClassName}>{text}</H5>
      <Image src={underlineSrc} alt="underline" className={imageClassName} />
    </div>
  );
};
