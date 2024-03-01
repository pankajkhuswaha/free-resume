import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../utils/ScrollToTop";
import ThemeManager from "../utils/ResumeThemeManger";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <ScrollToTop />
      <ThemeManager />
      <Navbar />
      <div className="mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
