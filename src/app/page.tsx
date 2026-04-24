import TextSlider from "./components/sliders/TextSlider";
import HomeHeader from "./components/pages/home/HomeHeader";
import HomeLatestProjects from "./components/pages/home/HomeLatestProjects";
import HomeServices from "./components/pages/home/HomeServices";
import HomeContacts from "./components/pages/home/HomeContacts";

export default function Home() {
  return (
    <>
      {/* Bottom-center glass tooltip */}
      {/* <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="clickable cursor-none px-5 py-2 rounded-full bg-red-500/15 backdrop-blur-md border border-red-400/30 text-lg text-red-200 shadow-lg">
          ⚠️ Site under construction
        </div>
      </div> */}

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

      {/* Contacts */}
      <HomeContacts />
    </>
  );
}
