import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      icon: "icon1",
      color: "color1",
      path: "/basic-info",
      name: "Basic Info",
    },
    {
      icon: "icon2",
      color: "color2",
      path: "/contact-details",
      name: "Contact Details",
    },
    {
      icon: "icon3",
      color: "color3",
      path: "/experiences",
      name: "Experiences",
    },
    {
      icon: "icon4",
      color: "color4",
      path: "/projects",
      name: "Projects",
    },
    {
      icon: "icon5",
      color: "color5",
      path: "/skills",
      name: "Skills",
    },
    {
      icon: "icon6",
      color: "color6",
      path: "/education",
      name: "Education",
    },
    {
      icon: "icon7",
      color: "color7",
      path: "/strength",
      name: "Strength",
    },
    {
      icon: "icon8",
      color: "color8",
      path: "/summary",
      name: "Summary",
    },
  ];
  return (
    <div className="sticky top-[80px] p-2 space-y-2 rounded-2xl bg-gray-50 shadow-md min-h-[calc(100vh-100px)] flex flex-col">
      {menuItems.map((menu, i) => {
        return (
          <NavLink
            key={i}
            to={"/app" + menu.path}
            className="p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white"
          >
            {menu.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
