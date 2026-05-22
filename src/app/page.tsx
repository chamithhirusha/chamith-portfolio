"use client";

import { useState } from "react";
import TextSlider from "./components/sliders/TextSlider";
import HomeHeader from "./components/pages/home/HomeHeader";
import HomeLatestProjects from "./components/pages/home/HomeLatestProjects";
import HomeServices from "./components/pages/home/HomeServices";
import HomeContacts from "./components/pages/home/HomeContacts";

export default function Home() {
  const [showWarning, setShowWarning] = useState(
    process.env.NEXT_PUBLIC_DEMO_MODE === "true",
  );

  return (
    <>
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
