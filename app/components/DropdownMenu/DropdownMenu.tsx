import { ROUTES } from "constants/index";
import { LiWithActiveLink } from "../LiWithActiveLink";
import useToggle from "hooks/useToggle";

export const DropdownMenu = () => {
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

  return (
    <div
      className="relative"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <button className="text-white hover:text-black transition-all">
        Services
      </button>
      {isHovered && (
        <ul className="absolute flex flex-col gap-2 pt-2">
          {menuItems.map((item) => (
            <LiWithActiveLink key={item.title} href={item.href}>
              {item.title}
            </LiWithActiveLink>
          ))}
        </ul>
      )}
    </div>
  );
};
