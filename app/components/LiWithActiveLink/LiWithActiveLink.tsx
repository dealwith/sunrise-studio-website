import { cn } from "utils/cn";
import Link from "next/link";
import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "constants/index";

type TProps = {
  children: string;
  href: string;
  className?: string;
};

export const LiWithActiveLink: FunctionComponent<TProps> = ({
  children,
  href,
  className: propsClassName,
  ...rest
}) => {
  const pathname = usePathname();
  const activeLinkColor =
    href === ROUTES.BUILDING ? "text-black" : "text-accent";

  return (
    <li
      className={cn(
        "text-white hover:text-black transition-colors",
        {
          [activeLinkColor]: href === pathname,
        },
        propsClassName,
      )}
      {...rest}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};
