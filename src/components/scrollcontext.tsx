"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define the type for the context
type SmoothScrollContextType = Lenis | null;

const SmoothScrollContext = createContext<SmoothScrollContextType>(null);

// Custom hook for easy access
export const useSmoothScroller = () => useContext(SmoothScrollContext);

// Define props type
interface ScrollContextProps {
  children: ReactNode;
}

export default function ScrollContext({ children }: ScrollContextProps) {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis({
      duration: 1.2, // Duration of the scroll effect
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      lerp: 0.1, // Linear interpolation for smoothness
    });

    function raf(time: number) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);
    setRaf(rafId);
    setLenis(scroller);

    return () => {
      if (lenisRef) {
        if (rafState !== null) {
          cancelAnimationFrame(rafState);
        }
        lenisRef.destroy();
      }
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
