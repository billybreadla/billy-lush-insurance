"use client";

import { useEffect, useRef } from "react";

/* ================================================================
   A small scroll-progress acorn that grows as you move down the page.
   It stays out of React's render cycle and respects reduced motion.
   ================================================================ */
export default function Reveal() {
  const fillRef = useRef<HTMLDivElement>(null);
  const acornRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    const updateProgress = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const progress = max > 0 ? Math.min(1, h.scrollTop / max) : 0;
      if (fillRef.current) fillRef.current.style.height = `${progress * 100}%`;
      if (acornRef.current) acornRef.current.style.transform = `scale(${0.45 + progress * 0.55})`;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="oakprog" aria-hidden="true">
      <div className="oakprog-track">
        <div className="oakprog-fill" ref={fillRef} />
      </div>
      <svg
        ref={acornRef}
        width="26"
        height="26"
        viewBox="0 0 48 48"
        fill="none"
        style={{ transform: "scale(0.45)" }}
      >
        <path
          d="M10 21c0-8 6.5-13 14-13s14 5 14 13c0 1.5-1 2.5-2.5 2.5h-23C11 23.5 10 22.5 10 21Z"
          fill="#1f3b2c"
        />
        <path d="M24 8c0-3 1.6-4.6 4-5" stroke="#1f3b2c" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M13 26.5h22c0 9-5 14.5-11 17.5-6-3-11-8.5-11-17.5Z" fill="#b9852f" />
      </svg>
    </div>
  );
}
