import { TextSlider } from "components";

export const TextSliderSection = () => {
  return (
    <section className="absolute left-0">
      <div className="flex w-[200%] gap-8">
        <TextSlider />
        <TextSlider />
      </div>
    </section>
  );
};
