"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show the loader for 2 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowLoader(false);
      }, 500); // Delay before hiding the loader with the transition effect
    }, 1500);

    // Clean up the timeouts when the component unmounts
    return () => {
      clearTimeout(timeout);
      setShowLoader(false);
    };
  }, []);

  if (showLoader) {
    return (
      <div className={`loader ${isLoading ? "" : "hidden"}`}>
        <Image src="/loader.gif" width={150} height={150} alt="Loader" />
      </div>
    );
  }
  return null;
};

export default Loader;
