import { useRef } from "react";

export const useSmoothScroll = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { elementRef, scrollToRef };
};
