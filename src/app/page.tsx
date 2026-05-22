"use client";

import HomeContacts from "./components/pages/home/HomeContacts";
import HomeHeader from "./components/pages/home/HomeHeader";
import HomeLatestProjects from "./components/pages/home/HomeLatestProjects";
import HomeServices from "./components/pages/home/HomeServices";
import TextSlider from "./components/sliders/TextSlider";

export default function Home() {
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
