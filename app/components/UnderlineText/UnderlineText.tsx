import Image from "next/image";
import { FunctionComponent } from "react";

import { H2 } from "components";
import { cn } from "utils/cn";

import redUnderlineSrc from "./img/redUnderline.svg";
import whiteUnderlineSrc from "./img/whiteUnderline.svg";

type TProps = {
  isRedText?: boolean;
  text: string;
  textClassName?: string;
  imageClassName?: string;
};

export const UnderlineText: FunctionComponent<TProps> = ({
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
      <H2 className={titleClassName}>{text}</H2>
      <Image src={underlineSrc} alt="underline" className={imageClassName} />
    </div>
  );
};
