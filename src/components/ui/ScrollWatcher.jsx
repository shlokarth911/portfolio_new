import React, { useEffect, useRef } from "react";

const ScrollWatcher = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.height = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 left-[98%] -translate-y-1/2 w-[0.5vw] h-[20vh] bg-neutral-800 rounded-full overflow-hidden scale-90 z-[99]">
      <div
        ref={progressRef}
        className="w-full h-full bg-neutral-300 rounded-full transition-all duration-150 ease-out"
      ></div>
    </div>
  );
};

export default ScrollWatcher;
