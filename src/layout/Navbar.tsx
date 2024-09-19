import { Download } from "lucide-react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import ResumeToPrint from "../resume/ResumeToPrint";
import infoStore from "../features/infoStore";

const Navbar = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const { info } = infoStore();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${info.name} Resume`,
  });
  const showDownloadButton = useLocation().pathname.includes("app");
  const id = localStorage.getItem("selectedResume");

  return (
    <div className="border-b shadow-md bg-white z-50 w-full sticky top-0">
      <div className="mx-auto p-3 flex justify-between items-center">
        <Link to={"/"} className="text-lg md:text-2xl font-bold text-primary">
          <img src="/logo.png" alt="logo" className="w-16 md:w-36" />
        </Link>
        {id && (
          <>
            {showDownloadButton ? (
              <button
                onClick={handlePrint}
                className="btn flex gap-2 items-center text-gray-800 font-semibold"
              >
                <Download /> Download{" "}
                <span className="hidden md:block">Resume</span>
              </button>
            ) : (
              <Link
                to={"/app/basic-info"}
                className="btn flex gap-2 max-sm:text-sm items-center text-gray-800 font-semibold capitalize"
              >
                continue building
                <span className="hidden md:block">Resume</span>
              </Link>
            )}
          </>
        )}
        {!id && (
          <a className="btn" href="#templates">
            Select template
          </a>
        )}
        <div className="hidden">
          <ResumeToPrint ref={componentRef} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
