import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../utils/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className=" relative">
      <ScrollToTop />
      <Navbar />
      <div className="mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
