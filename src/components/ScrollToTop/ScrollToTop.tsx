// src/components/ScrollToTop.tsx
import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={scrollToTop}
        className={`transition duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } p-3 rounded-[3px] bg-[#838C48] text-white shadow-lg hover:bg-[#303030] focus:outline-none`}
      >
        <svg
          className="w-[15px] h-[15px] p-[2px]"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 319 511.61"
          fill="white"
          transform="rotate(90)"
        >
          <path d="m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
