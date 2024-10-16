import { FunctionComponent } from "react";
import { TextSliderItem } from "./TextSliderItem";
import { cn } from "utils/cn";

type TProps = {
  className?: string;
};

export const TextSlider: FunctionComponent<TProps> = ({
  className: propsClassName,
}) => {
  const containerClassName = cn("flex gap-8", propsClassName);

  return (
    <div className={containerClassName}>
      <TextSliderItem
        text="sunrise studio"
        className="text-white font-unbounded"
      />
      <TextSliderItem
        text="sunrise studio"
        className="bg-gradient-to-r from-[#ff0000] via-[#f71919] to-[#e95848] bg-clip-text text-transparent font-unboundedMedium"
      />
      <TextSliderItem
        text="sunrise studio"
        className="text-white font-unbounded"
      />
    </div>
  );
};
