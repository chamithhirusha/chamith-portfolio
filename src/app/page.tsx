"use client";

import HomeContacts from "./components/pages/home/HomeContacts";
import HomeHeader from "./components/pages/home/HomeHeader";
import HomeLatestProjects from "./components/pages/home/HomeLatestProjects";
import HomeServices from "./components/pages/home/HomeServices";
import MotionSection from "./components/motion/MotionSection";
import TextSlider from "./components/sliders/TextSlider";

export default function Home() {
  return (
    <>
      <MotionSection amount={0.1}>
        <HomeHeader />
      </MotionSection>
      <MotionSection>
        <TextSlider text="Latest Projects" />
      </MotionSection>
      <MotionSection>
        <HomeLatestProjects />
      </MotionSection>
      <MotionSection>
        <TextSlider text="Services" reverse />
      </MotionSection>
      <MotionSection>
        <HomeServices />
      </MotionSection>
      <MotionSection>
        <TextSlider text="Contacts" />
      </MotionSection>
      <MotionSection>
        <HomeContacts />
      </MotionSection>
    </>
  );
}
