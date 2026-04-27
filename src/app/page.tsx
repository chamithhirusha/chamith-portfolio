"use client";

import { useState } from "react";
import TextSlider from "./components/sliders/TextSlider";
import HomeHeader from "./components/pages/home/HomeHeader";
import HomeLatestProjects from "./components/pages/home/HomeLatestProjects";
import HomeServices from "./components/pages/home/HomeServices";
import HomeContacts from "./components/pages/home/HomeContacts";

export default function Home() {
  const [showWarning, setShowWarning] = useState(process.env.NEXT_PUBLIC_DEMO_MODE === "true");

  return (
    <>
      {/* Fullscreen Construction Overlay */}
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg">
          <div className="relative max-w-md w-[90%] rounded-2xl border border-red-400/30 bg-red-500/10 p-8 text-center shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setShowWarning(false)}
              className="absolute clickable top-3 right-3 text-red-200 hover:text-white text-xl"
            >
              ✕
            </button>

            <div className="text-3xl mb-3">⚠️</div>
            <h2 className="text-xl font-semibold text-red-200">
              Site Under Construction
            </h2>
            <p className="mt-2 text-red-100/80 text-sm">
              This portfolio is still being built. Some features may not work as
              expected.
            </p>

            <button
              onClick={() => setShowWarning(false)}
              className="mt-6 px-5 py-2 rounded-full bg-red-500/30 hover:bg-red-500/50 text-red-100 transition clickable"
            >
              Continue Anyway
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      <HomeHeader />

      <TextSlider text="Latest Projects" />
      <HomeLatestProjects />

      <TextSlider text="Services" reverse />
      <HomeServices />

      <TextSlider text="Contacts" />
      <HomeContacts />
    </>
  );
}
