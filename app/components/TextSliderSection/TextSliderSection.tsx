import { TextSlider } from "components";

export const TextSliderSection = () => {
  return (
    <section className="absolute left-0 lg:mt-[120px] md:mt-[100px] mt-[60px]">
      <div className="flex w-[200%] gap-8">
        <TextSlider />
        <TextSlider />
      </div>
      <div className="flex w-[200%] gap-8 absolute -left-24 lg:top-28 md:top-20 top-14">
        <TextSlider />
        <TextSlider />
      </div>
      <div className="flex w-[200%] gap-8 absolute -left-48 lg:top-56 md:top-40 top-28">
        <TextSlider />
        <TextSlider />
      </div>
    </section>
  );
};
