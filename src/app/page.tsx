import TextSlider from "./components/sliders/TextSlider";
import HomeHeader from "./components/pages/home/HomeHeader";
import HomeLatestProjects from "./components/pages/home/HomeLatestProjects";
import HomeServices from "./components/pages/home/HomeServices";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Text slider */}
      <TextSlider text="Latest Projects" />

      {/* Latest Projects */}
      <HomeLatestProjects />

      {/* Text slider */}
      <TextSlider text="Services" reverse />

      {/* Services */}
      <HomeServices />

      {/* Text slider */}
      <TextSlider text="Contacts" />
    </>
  );
}
