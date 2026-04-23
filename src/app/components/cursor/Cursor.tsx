"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;

      const ease = 0.2;

      currentX += dx * ease;
      currentY += dy * ease;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      const el = document.elementFromPoint(
        currentX,
        currentY,
      ) as HTMLElement | null;

      if (el?.closest(".clickable")) {
        cursor.classList.add("cursor-hover");
      } else {
        cursor.classList.remove("cursor-hover");
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
