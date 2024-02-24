import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Resume from "../../resume";

const Resumebuilder = () => {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <div className="flex-[7]">
        <Outlet />
        <div className="rounded-2xl border shadow-xl mt-4">
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default Resumebuilder;
