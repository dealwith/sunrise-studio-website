import { Dispatch, SetStateAction, createContext } from "react";

type TProps = {
  isActiveBurger: boolean;
  setIsActiveBurger: Dispatch<SetStateAction<boolean>>;
};

export const BurgerContext = createContext<TProps>({
  isActiveBurger: false,
  setIsActiveBurger: () => {},
});
