import Image, { StaticImageData } from "next/image";
import { useWindowSize } from "hooks";
import { ArrowButton, BorderedContainer, H5 } from "components";
import { FunctionComponent } from "react";

type TProps = {
  title: string;
  description: string;
  primaryImage: StaticImageData;
  secondaryImage?: StaticImageData;
  mainImagePosition: string;
};

export const Domain: FunctionComponent<TProps> = ({
  title,
  description,
  primaryImage,
  secondaryImage,
  mainImagePosition,
}) => {
  const { isLaptopS } = useWindowSize();
  const isLeftPositing = mainImagePosition === "left";
  const isRightPositing = mainImagePosition === "right";

  return (
    <BorderedContainer>
      {!isLaptopS && isLeftPositing && (
        <Image
          src={primaryImage}
          alt={title}
          object-fit={"contain"}
          className="lg:w-[55%] md:w-80 w-full"
        />
      )}
      <div className="flex flex-col self-stretch gap-4 w-full">
        <H5 className="font-medium text-start w-full">{title}</H5>
        {isLaptopS && (
          <Image
            src={primaryImage}
            alt={title}
            object-fit={"contain"}
            className="lg:w-[55%] md:w-80 w-full"
          />
        )}
        <p className="text-base lg:text-xl font-light z-10">{description}</p>
        <ArrowButton className="bg-accent md:mt-2 mt-0" width="10" height="10">
          Learn more
        </ArrowButton>
        {!isLaptopS && secondaryImage && (
          <Image
            src={secondaryImage}
            alt="image"
            className="bottom-[-40px] right-0 absolute w-1/5 z-0"
          />
        )}
      </div>
      {!isLaptopS && isRightPositing && (
        <Image
          src={primaryImage}
          alt={title}
          object-fit={"contain"}
          className="lg:w-[55%] md:w-80 w-full"
        />
      )}
    </BorderedContainer>
  );
};
