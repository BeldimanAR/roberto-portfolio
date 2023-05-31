import { useEffect, useState } from "react";

export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener only on the client-side
    if (typeof window !== "undefined") {
      handleResize(); // Initial measurement

      // Attach event listener for window resize
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return viewport;
};
