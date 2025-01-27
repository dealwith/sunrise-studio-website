"use client";

import { useEffect, useState } from "react";

interface IWindowSize {
  width: number;
  height: number;
}

interface UseWindowSize extends IWindowSize {
  isLaptopL: boolean;
  isLaptopS: boolean;
  isMobileM: boolean;
}

export function useWindowSize(): UseWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({
          width,
          height,
        });
      };
      window.addEventListener("resize", handleSize);
      handleSize();

      return () => window.removeEventListener("resize", handleSize);
    }
  }, []);

  return {
    ...windowSize,
    isLaptopL: windowSize.width > 940,
    isLaptopS: windowSize.width <= 768,
    isMobileM: windowSize.width > 425,
  };
}
