import Link from "next/link";
import { Button, FooterNavigation, H4, ScrollButton } from "components";
import { useWindowSize } from "hooks";
import { COLORS } from "constants/index";
import { FunctionComponent } from "react";
import { cn } from "utils/cn";

import styles from "./footer.module.scss";

type TProps = {
  handleClick: () => void;
  isMainPage?: boolean;
};

export const Footer: FunctionComponent<TProps> = ({
  isMainPage,
  handleClick,
}) => {
  const { isMobileM } = useWindowSize();

  const buttonBgColor = isMainPage ? "bg-black" : "bg-accent";
  const containerBgColor = isMainPage ? "bg-secondary" : "bg-black";
  const hoverListItemColor = isMainPage
    ? "hover:text-black"
    : "hover:text-accent";
  const containerClassName = cn(
    "mt-44 w-full absolute left-0",
    containerBgColor,
  );
  const buttonClassName = cn(
    buttonBgColor,
    "hover:bg-white hover:text-accent transition-all",
  );
  const scrollButtonClassName = cn(
    buttonBgColor,
    "hover:bg-white border border-black -rotate-90 transition-all",
  );

  return (
    <footer className={containerClassName}>
      <div className="flex flex-col gap-8 sm:flex-row justify-between max-w-[1440px] mx-auto py-[60px] px-4 md:px-10">
        <FooterNavigation className={hoverListItemColor} />
        <div className="w-full sm:w-2/3 flex-col flex gap-4 sm:gap-8">
          <H4 className={styles.text}>
            Write us to schedule a call to discuss your project and learn more
            about sunrise studio
          </H4>
          <div className="flex justify-between">
            <Link href="#contactUs" className="w-full sm:w-fit">
              <Button className={buttonClassName} size="m">
                Contact us
              </Button>
            </Link>
            {isMobileM && (
              <ScrollButton
                handleClick={handleClick}
                className={scrollButtonClassName}
                defaultColor={COLORS.WHITE}
                hoverColor={COLORS.BLACK}
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
