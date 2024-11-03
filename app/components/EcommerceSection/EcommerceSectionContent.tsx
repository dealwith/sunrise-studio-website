import { BurgerContext } from "context";
import { useContext } from "react";
import { useWindowSize } from "hooks";
import { MobileNavigation, P } from "components";

export const EcommerceSectionContent = () => {
  const { isActiveBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  return (
    <section className="flex flex-col justify-center h-screen">
      {!isActiveBurger && (
        <div className="flex flex-col gap-7 justify-between">
          <h1 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-7xl xl:text-[80px] font-unboundedMedium text-accent">
            Your reliable partner in the world of{" "}
            <span className="whitespace-nowrap">e-commerce</span>
          </h1>
          <P className="text-xl max-w-[551px] font-light">
            In today&apos;s world, a successful business is impossible without
            an effective online presence. We specialize in developing
            high-quality e-commerce websites that help your business reach new
            goals.
          </P>
        </div>
      )}
      {isLaptopS && <MobileNavigation />}
    </section>
  );
};
