"use client";

import AboutBanner from "../components/pages/about/AboutBanner";
import AboutCertifications from "../components/pages/about/AboutCertifications";
import AboutExperience from "../components/pages/about/AboutExperience";
import AboutExpertiseArea from "../components/pages/about/AboutExpertiseArea";
import AboutIntroduction from "../components/pages/about/AboutIntroduction";
import AboutRecommendations from "../components/pages/about/AboutRecommendations";
import AboutSkills from "../components/pages/about/AboutSkills";
import AboutTitle from "../components/pages/about/AboutTitle";
import TextSlider from "../components/sliders/TextSlider";

export default function About() {
  return (
    <>
      <AboutTitle />
      <AboutIntroduction />
      <TextSlider text="Resume / CV" id="resume" />
      <AboutExpertiseArea />
      <AboutExperience />
      <AboutCertifications />
      <AboutSkills />
      <AboutRecommendations />
      <AboutBanner />
    </>
  );
}
