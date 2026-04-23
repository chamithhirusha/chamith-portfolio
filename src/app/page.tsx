import TextSlider from "./components/text-slider/TextSlider";
import HomeHeader from "./components/pages/home/header/HomeHeader";
import HomeLatestProjects from "./components/pages/home/header/HomeLatestProjects";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Text slider */}
      <TextSlider text="Latest Projects" />

      {/* Latest Projects */}
      <HomeLatestProjects />
    </>
  );
}
