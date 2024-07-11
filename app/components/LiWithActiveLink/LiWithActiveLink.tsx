import { cn } from "utils/cn";
import Link from "next/link";
import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";

type TProps = {
  children: string;
  href: string;
};

export const LiWithActiveLink: FunctionComponent<TProps> = ({
  children,
  href,
  ...rest
}) => {
  const pathname = usePathname();

  return (
    <li
      className={cn("text-white hover:text-black transition-colors", {
        "text-accent": href === pathname,
      })}
      {...rest}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};
