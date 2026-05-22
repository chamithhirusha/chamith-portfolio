"use client";

import { useEffect, useState } from "react";

interface Props {
  type: "success" | "error" | "info";
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Alert({
  type,
  message,
  onClose,
  duration = 3000,
}: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // start exit animation before unmount
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, duration);

    // remove from DOM after animation ends
    const removeTimer = setTimeout(() => {
      onClose();
    }, duration + 250);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [duration, onClose]);

  return (
    <div className="fixed top-6 right-6 z-[5000]">
      <div
        className={`
          px-5 py-3 rounded-xl shadow-xl border backdrop-blur-md
          transition-all duration-300 ease-out
          transform

          ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-[-10px] scale-95"
          }

          ${
            type === "success"
              ? "bg-green-500/10 border-green-500 text-green-400"
              : type === "error"
                ? "bg-red-500/10 border-red-500 text-red-400"
                : "bg-blue-500/10 border-blue-500 text-blue-400"
          }
        `}
      >
        <p className="text-sm md:text-base font-semibold">{message}</p>
      </div>
    </div>
  );
}
