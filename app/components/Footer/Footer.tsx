import Link from "next/link";
import { Button, FooterNavigation, H4, ScrollButton } from "components";
import { useWindowSize } from "hooks";
import { COLORS } from "constants/index";
import { FunctionComponent } from "react";

import styles from "./footer.module.scss";

type TProps = {
  handleClick: () => void;
};

export const Footer: FunctionComponent<TProps> = ({ handleClick }) => {
  const { isMobileM } = useWindowSize();

  return (
    <footer className="mt-44 bg-secondary w-full absolute left-0">
      <div className="flex flex-col gap-8 sm:flex-row justify-between max-w-[1440px] mx-auto py-[60px] px-4 md:px-10">
        <FooterNavigation />
        <div className="w-full sm:w-2/3 flex-col flex gap-4 sm:gap-8">
          <H4 className={styles.text}>
            Write us to schedule a call to discuss your project and learn more
            about sunrise studio
          </H4>
          <div className="flex justify-between">
            <Link href="#contactUs" className="w-full sm:w-fit">
              <Button className="bg-primary" size="m">
                Contact us
              </Button>
            </Link>
            {isMobileM && (
              <ScrollButton
                handleClick={handleClick}
                className={styles.btn}
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
