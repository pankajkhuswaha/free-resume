import {
  Activity,
  BadgeInfo,
  Briefcase,
  FolderGit,
  GraduationCap,
  Palette,
  Phone,
  ShieldCheck,
} from "lucide-react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const menuItems = [
    {
      color: "#FF9671",
      path: "/basic-info",
      name: "Basic Info",
      icon: <BadgeInfo />,
    },
    {
      color: "#FF6F91",
      path: "/contact-details",
      name: "Contact Details",
      icon: <Phone />,
    },
    {
      color: "#00D2FC",
      path: "/experiences",
      name: "Experiences",
      icon: <Briefcase />,
    },
    {
      color: "#FFC75F",
      path: "/projects",
      name: "Projects",
      icon: <FolderGit />,
    },
    {
      color: "#00C9A7",
      path: "/skills",
      name: "Skills",
      icon: <Activity />,
    },
    {
      color: "#0081CF",
      path: "/educations",
      name: "Educations",
      icon: <GraduationCap />,
    },
    {
      color: "#845EC2",
      path: "/strengths",
      name: "Strengths",
      icon: <ShieldCheck />,
    },
    {
      color: "#008F7A",
      path: "/theme",
      name: "Change Theme",
      icon: <Palette />,
    },
  ];
  return (
    <>
      <div className="sticky top-[80px] p-2 space-y-2 rounded-2xl bg-gray-50 shadow-md min-h-[calc(100vh-100px)] hidden md:flex flex-col">
        {menuItems.map((menu, i) => (
          <SidebarMenu key={i} menu={menu} />
        ))}
      </div>
      <div className="border rounded-2xl w-full flex md:hidden">
        {menuItems.map((menu, i) => (
          <SidebarMenu key={i} menu={menu} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
