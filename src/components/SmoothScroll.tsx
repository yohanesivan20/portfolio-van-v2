"use client";
import Lenis from "lenis";
import { useEffect } from "react";

let lenis: Lenis;

export function getLenis() {
  return lenis;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    lenis = new Lenis({ lerp: 0.08 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}