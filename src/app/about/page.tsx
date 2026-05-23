"use client";

import AboutBanner from "../components/pages/about/AboutBanner";
import AboutCertifications from "../components/pages/about/AboutCertifications";
import AboutExperience from "../components/pages/about/AboutExperience";
import AboutExpertiseArea from "../components/pages/about/AboutExpertiseArea";
import AboutIntroduction from "../components/pages/about/AboutIntroduction";
import AboutRecommendations from "../components/pages/about/AboutRecommendations";
import AboutSkills from "../components/pages/about/AboutSkills";
import AboutTitle from "../components/pages/about/AboutTitle";
import MotionSection from "../components/motion/MotionSection";
import TextSlider from "../components/sliders/TextSlider";

export default function About() {
  return (
    <>
      <MotionSection>
        <AboutTitle />
      </MotionSection>
      <MotionSection>
        <AboutIntroduction />
      </MotionSection>
      <MotionSection>
        <TextSlider text="Resume / CV" id="resume" />
      </MotionSection>
      <MotionSection>
        <AboutExpertiseArea />
      </MotionSection>
      <MotionSection>
        <AboutExperience />
      </MotionSection>
      <MotionSection>
        <AboutCertifications />
      </MotionSection>
      <MotionSection>
        <AboutSkills />
      </MotionSection>
      <MotionSection>
        <AboutRecommendations />
      </MotionSection>
      <MotionSection>
        <AboutBanner />
      </MotionSection>
    </>
  );
}
