"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationTransition() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setActive(true);
    const timeout = window.setTimeout(() => setActive(false), 720);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className={`route-transition-overlay ${active ? "is-active" : ""}`}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </div>
  );
}
