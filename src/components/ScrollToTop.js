import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

function ScrollToTop() {
  const [showGoButton, setShowGoButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowGoButton(window.scrollY > 200);
    });
  }, []);

  //handler
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showGoButton && (
        <div className="h-11 w-11 bg-[#f0784e] rounded-xl border border-white cursor-pointer fixed right-8 bottom-[88px] z-[1200] shadow-lg hover:animate-pulse flex items-center justify-center">
          <ArrowUpIcon
            className="h-6 w-6 text-white"
            onClick={() => goToTop()}
          />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
