import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className=" relative">
      <Navbar />
      <div className="mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
