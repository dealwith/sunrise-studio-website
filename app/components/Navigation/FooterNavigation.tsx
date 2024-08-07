import Link from "next/link";
import { FunctionComponent } from "react";

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
          <Link href="#home">Home</Link>
        </li>
        <li className={propsClassName}>
          <Link href="#aboutUs">About us</Link>
        </li>
        <li className={propsClassName}>
          <Link href="#services">Services</Link>
        </li>
        <li className={propsClassName}>
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};
