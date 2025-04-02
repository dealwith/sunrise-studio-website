import Image from "next/image";
import { HTMLProps, useContext } from "react";

import { cn } from "@utils/cn";
import { Button, Logo, Navigation } from "components";
import { BurgerContext } from "context";
import { useWindowSize } from "hooks";

import burgerSrc from "./img/BurgerIcon.svg";
import crossSrc from "./img/CrossIcon.svg";

export const Header = ({ className, ...rest }: HTMLProps<HTMLDivElement>) => {
  const { isActiveBurger, setIsActiveBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  const handleBurgerClick = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  return (
    <header
      className={cn(
        "flex justify-between py-5 w-full lg:gap-16 gap-10 absolute left-0 right-0 z-20 max-w-[1440px] px-4 md:px-10 my-0 mx-auto",
        className,
      )}
      {...rest}
    >
      {isLaptopS ? (
        <>
          <Logo width={32} height={32} />
          <Button onClick={handleBurgerClick}>
            <Image src={isActiveBurger ? crossSrc : burgerSrc} alt="Burger" />
          </Button>
        </>
      ) : (
        <>
          <Logo width={48} height={48} />
          <Navigation />
          <a href="#contactUs">
            <Button
              className="bg-primary whitespace-nowrap text-white hover:bg-white hover:text-accent transition-all"
              size="m"
            >
              Contact us
            </Button>
          </a>
        </>
      )}
    </header>
  );
};
