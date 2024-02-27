import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ menu }) => {
  const { color, path, name, icon } = menu;
  const [isHovered, setIsHovered] = useState(false);
  const [isActiveLink, setIsActive] = useState(false);

  return (
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
      {name}
    </NavLink>
  );
};

export default SidebarMenu;
