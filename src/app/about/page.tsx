import AboutTitle from "../components/pages/about/AboutTitle";
import AboutIntroduction from "../components/pages/about/AboutIntroduction";
import TextSlider from "../components/sliders/TextSlider";

export default function About() {
  return (
    <>
      <AboutTitle />

      <AboutIntroduction />

      <TextSlider text="Resume / CV" />
    </>
  );
}
