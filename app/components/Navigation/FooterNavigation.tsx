import Link from "next/link";
import { FunctionComponent } from "react";
import { ROUTES } from "constants/index";

type TProps = {
  className?: string;
};

export const FooterNavigation: FunctionComponent<TProps> = ({
  className: propsClassName,
}) => {
  return (
    <nav>
      <ul className="flex flex-col md:gap-10 gap-5 text-2xl transition-all">
        <li className={propsClassName}>
          <Link href={ROUTES.HOME}>Home</Link>
        </li>
        <li className={propsClassName}>
          <Link href={ROUTES.ABOUT_US}>About us</Link>
        </li>
        <li className={propsClassName}>
          <Link href={ROUTES.SERVICES}>Services</Link>
        </li>
        <li className={propsClassName}>
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};
