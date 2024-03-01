import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const path = useLocation().pathname;

  const topScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    topScroll();
  }, [path]);

  return <></>;
};

export default ScrollToTop;
