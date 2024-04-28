import Image from "next/image";
import Link from "next/link";
import { HTMLProps, useContext } from "react";
import { cn } from "@utils/cn";

import { Button, Logo, Navigation } from "components";
import { BurgerContext } from "context";
import { useWindowSize } from "hooks";

import burgerSrc from "./img/BurgerIcon.svg";
import crossSrc from "./img/CrossIcon.svg";

export const Header = ({ className, ...rest }: HTMLProps<HTMLDivElement>) => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);
  const { isLaptopS } = useWindowSize();

  const handleBurgerClick = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <header
      className={cn("flex justify-between py-30 w-full gap-16", className)}
      {...rest}
    >
      {isLaptopS ? (
        <>
          <Logo width={32} height={32} />
          <Button onClick={handleBurgerClick}>
            <Image src={activeBurger ? crossSrc : burgerSrc} alt="Burger" />
          </Button>
        </>
      ) : (
        <>
          <Logo width={48} height={48} />
          <Navigation />
          <Link href="#contactUs">
            <Button
              className="bg-primary whitespace-nowrap text-white hover:bg-white hover:text-accent transition-all"
              size="m"
            >
              Contact us
            </Button>
          </Link>
        </>
      )}
    </header>
  );
};
