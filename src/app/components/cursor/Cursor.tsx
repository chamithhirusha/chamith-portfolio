"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -10;
    let mouseY = -10;

    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const getState = () => {
      const el = document.elementFromPoint(
        mouseX,
        mouseY,
      ) as HTMLElement | null;

      const clickable = el?.closest(".clickable");
      const circleButton = el?.closest(".stick-here") as HTMLElement | null;

      if (circleButton) {
        const rect = circleButton.getBoundingClientRect();

        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          isSticky: true,
          isHover: true,
        };
      }

      if (clickable) {
        return {
          x: mouseX,
          y: mouseY,
          isSticky: false,
          isHover: true,
        };
      }

      return {
        x: mouseX,
        y: mouseY,
        isSticky: false,
        isHover: false,
      };
    };

    const animate = () => {
      const state = getState();

      const dx = state.x - currentX;
      const dy = state.y - currentY;

      const ease = state.isSticky ? 0.12 : 0.2;

      currentX += dx * ease;
      currentY += dy * ease;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      // Hover + sticky states combined
      cursor.classList.toggle("cursor-hover", state.isHover);
      cursor.classList.toggle("cursor-sticky", state.isSticky);

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
