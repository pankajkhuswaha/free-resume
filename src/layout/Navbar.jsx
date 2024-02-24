import React, { useRef } from "react";
import Resume from "../resume";
import { useReactToPrint } from "react-to-print";

const Navbar = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="border-b shadow-xl bg-gray-100 w-full sticky top-0">
      <div className="container mx-auto p-3 flex justify-between items-center">
        <h1>Resume</h1>
        <button onClick={handlePrint} className="btn">
          Download
        </button>
        <div className="hidden">
          <Resume ref={componentRef} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
