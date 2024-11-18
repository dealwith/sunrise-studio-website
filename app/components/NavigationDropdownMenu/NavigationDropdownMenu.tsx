import { ROUTES } from "constants/index";
import { LiWithActiveLink } from "../LiWithActiveLink";
import useToggle from "hooks/useToggle";
import { cn } from "@utils/cn";

export const NavigationDropdownMenu = () => {
  const [isHovered, toggleHover] = useToggle();
  const menuItems = [
    {
      title: "Building",
      href: ROUTES.BUILDING,
    },
    {
      title: "Staffing",
      href: ROUTES.STAFFING,
    },
    {
      title: "E-commerce",
      href: ROUTES.ECOMMERCE,
    },
  ];

  const ulClasses = cn(
    "absolute top-full left-0",
    "min-w-[200px] rounded-md shadow-lg",
    "overflow-hidden",
    isHovered ? "visible" : "invisible",
  );

  const getItemClasses = (index: number) =>
    cn(
      "block w-full px-4 py-2",
      "hover:bg-gray-100",
      "transform transition-all duration-300",
      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      `transition-all duration-300 delay-[${index * 100}ms]`,
    );

  return (
    <div
      className="relative"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <button className="text-white hover:text-black transition-all">
        Services
      </button>
      <div className={ulClasses}>
        <div className="p-2 flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <LiWithActiveLink
              key={item.title}
              href={item.href}
              className={getItemClasses(index)}
            >
              {item.title}
            </LiWithActiveLink>
          ))}
        </div>
      </div>
    </div>
  );
};
