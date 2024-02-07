import Image from "next/image";
import { useContext } from "react";
import { Button, Logo, Navigation } from "components";
import { BurgerContext } from "context";
import { useWindowSize } from "hooks";

import burgerSrc from "./img/BurgerIcon.svg";
import crossSrc from "./img/CrossIcon.svg";

export const Header = () => {
	const { activeBurger, setActiveBurger } = useContext(BurgerContext);
	const { isLaptopS } = useWindowSize();

	const handleBurgerClick = () => {
		setActiveBurger(!activeBurger);
	};

	return (
		<header className="flex justify-between py-30 w-full">
			{isLaptopS ? (
				<>
					<Logo />
					<Button onClick={handleBurgerClick}>
						<Image src={activeBurger ? crossSrc : burgerSrc} alt="Burger" />
					</Button>
				</>
			) : (
				<>
					<Navigation />
					<Button className="bg-primary" size="m">
						Contact us
					</Button>
				</>
			)}
		</header>
	);
};
