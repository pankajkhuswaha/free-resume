import { ArrowUp } from "lucide-react";
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

  return;

  //   return (
  //     <div
  //       onClick={topScroll}
  //       className="fixed bottom-3 right-3 z-[999] cursor-pointer rounded-full p-2 bg-primary text-white"
  //     >
  //       <ArrowUp />
  //     </div>
  //   );
};

export default ScrollToTop;
