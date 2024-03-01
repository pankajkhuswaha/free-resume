import { useState } from "react";
import { NavLink } from "react-router-dom";
type SideBarMenusProp = {
  color: string;
  path: string;
  name: string;
  icon: JSX.Element;
};
const SidebarMenu = ({ menu }: { menu: SideBarMenusProp }) => {
  const { color, path, name, icon } = menu;
  const [isHovered, setIsHovered] = useState(false);
  const [isActiveLink, setIsActive] = useState(false);

  return (
    <div className="relative">
      {isHovered && (
        <div className="absolute md:hidden top-[54px] flex flex-col items-start justify-center">
          <div
            style={{ borderBottom: `5px solid ${color}` }}
            className="arrow-up ml-2"
          ></div>
          <div
            style={{
              backgroundColor: color,
            }}
            className="tip px-1 py-1 rounded-md whitespace-nowrap text-white"
          >
            {name}
          </div>
        </div>
      )}
      <NavLink
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        to={"/app" + path}
        style={{
          backgroundColor: isHovered || isActiveLink ? color : "",
          color: isHovered || isActiveLink ? "white" : "rgb(31 41 55)",
        }}
        className={({ isActive }) => {
          setIsActive(isActive);
          return "p-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2";
        }}
      >
        {icon}
        <span className="hidden md:block">{name}</span>
      </NavLink>
    </div>
  );
};

export default SidebarMenu;
