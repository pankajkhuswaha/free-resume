import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Resume from "../../resume";

const Resumebuilder = () => {
  const id = localStorage.getItem("selectedResume");
  if (!id) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex flex-wrap md:gap-4 justify-between max-md:p-3">
      <div className="w-full md:flex-[2]">
        <Sidebar />
      </div>
      <div className="w-full md:flex-[7]">
        <Outlet />
        <div className="rounded-2xl border shadow-xl mt-4">
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default Resumebuilder;
