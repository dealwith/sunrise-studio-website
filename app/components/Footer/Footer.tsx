import Link from "next/link";
import { Button, FooterNavigation, H4, ScrollButton } from "components";
import { COLORS } from "constants/index";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className="mt-44 bg-secondary w-screen absolute left-0">
      <div className={styles.contentWrapper}>
        <FooterNavigation />
        <div className="w-2/3 flex-col flex gap-8">
          <H4 className={styles.text}>
            Write us to schedule a call to discuss your project and learn more
            about sunrise studio
          </H4>
          <div className="flex justify-between">
            <Link href="#contactUs">
              <Button className="bg-primary" size="m">
                Contact us
              </Button>
            </Link>
            <ScrollButton
              className={styles.btn}
              defaultColor={COLORS.WHITE}
              hoverColor={COLORS.BLACK}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
