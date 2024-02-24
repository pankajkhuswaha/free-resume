import React from "react";

const Sidebar = () => {
  const menus = [
    "Basic Info",
    "Conatct Details",
    "Experiences",
    "Projects",
    "Skills",
    "Education",
    "strength",
    "summary",
  ];
  return (
    <div className="border sticky top-[90px] p-2 space-y-3 rounded bg-gray-50 shadow-md min-h-[calc(100vh-100px)]">
      {menus.map((menu, i) => {
        return (
          <div
            key={i}
            className="p-3 rounded cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white"
          >
            {menu}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
