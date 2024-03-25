import { Dispatch, SetStateAction, createContext } from "react";

type TProps = {
	activeBurger: boolean;
	setActiveBurger: Dispatch<SetStateAction<boolean>>;
};

export const BurgerContext = createContext<TProps>({
	activeBurger: false,
	setActiveBurger: () => {}
});
