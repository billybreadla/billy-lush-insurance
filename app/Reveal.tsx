"use client";

import { useEffect, useState } from "react";

/* ————————————————————————————————————————————————
   Two small bits of motion, on-brand with the oak motif:
   1. A scroll-progress acorn that grows as you move down the page.
   2. Reveal-on-scroll for anything tagged [data-reveal] and for the
      .acorn-rule dividers (their lines "draw" outward, acorn drops in).
   All respects prefers-reduced-motion.
   ———————————————————————————————————————————————— */
export default function Reveal() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. scroll progress
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // 2. reveal on scroll
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], .acorn-rule");
    if (reduce) {
      targets.forEach((t) => t.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((t) => io.observe(t));
      return () => {
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // acorn grows from a small cap to a full nut as you scroll
  const grow = 0.45 + progress * 0.55;

  return (
    <div className="oakprog" aria-hidden="true" title="You're growing an oak as you read">
      <div className="oakprog-track">
        <div className="oakprog-fill" style={{ height: `${progress * 100}%` }} />
      </div>
      <svg
        width="26"
        height="26"
        viewBox="0 0 48 48"
        fill="none"
        style={{ transform: `scale(${grow})` }}
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
