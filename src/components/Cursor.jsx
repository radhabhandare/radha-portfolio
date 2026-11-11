import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Cursor() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduced]);
  if (reduced) return null;
  return <div ref={ref} className="custom-cursor" aria-hidden="true" />;
}