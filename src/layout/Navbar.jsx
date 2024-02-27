import React, { useRef } from "react";
import Resume from "../resume";
import { useReactToPrint } from "react-to-print";
import { Download } from "lucide-react";

const Navbar = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const id = localStorage.getItem("selectedResume");

  return (
    <div className="border-b shadow-md bg-white z-50 w-full sticky top-0">
      <div className="container mx-auto p-3 flex justify-between items-center">
        <h1>Resume</h1>
        {id && (
          <button
            onClick={handlePrint}
            className="btn flex gap-2 items-center text-gray-800 font-semibold"
          >
            <Download /> Download Resume
          </button>
        )}
        {!id && (
          <a className="btn" href="#templates">
            Select template
          </a>
        )}
        <div className="hidden">
          <Resume ref={componentRef} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
