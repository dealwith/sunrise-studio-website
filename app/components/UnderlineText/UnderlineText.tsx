import Image from "next/image";
import { FunctionComponent } from "react";
import { H2 } from "components";

import redUnderlineSrc from "./img/redUnderline.svg";
import whiteUnderlineSrc from "./img/whiteUnderline.svg";

type TProps = {
  isRedText?: boolean;
  text: string;
  imageClassName?: string;
};

export const UnderlineText: FunctionComponent<TProps> = ({
  isRedText,
  text,
  imageClassName,
}) => {
  const underlineSrc = isRedText ? redUnderlineSrc : whiteUnderlineSrc;
  const textColor = isRedText ? "text-accent" : "text-white";

  return (
    <div className="w-fit flex flex-col">
      <H2 className={textColor}>{text}</H2>
      <Image src={underlineSrc} alt="underline" className={imageClassName} />
    </div>
  );
};
