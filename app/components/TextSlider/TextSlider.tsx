import { TextSliderItem } from "./TextSliderItem";

export const TextSlider = () => {
  return (
    <div className="flex gap-8 w-full animate-infinite-scroll">
      <TextSliderItem
        text="surnise studio"
        className="text-white font-unbounded"
      />
      <TextSliderItem
        text="surnise studio"
        className="bg-gradient-to-r from-[#ff0000] via-[#f71919] to-[#e95848] bg-clip-text text-transparent font-unboundedMedium"
      />
      <TextSliderItem
        text="surnise studio"
        className="text-white font-unbounded"
      />
    </div>
  );
};
