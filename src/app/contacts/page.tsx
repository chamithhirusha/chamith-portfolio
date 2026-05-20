import ContactLocation from "../components/pages/contacts/ContactLocation";
import ContactTitle from "../components/pages/contacts/ContactTitle";
import HomeContacts from "../components/pages/home/HomeContacts";
import TextSlider from "../components/sliders/TextSlider";

export default function Contacts() {
  return (
    <>
      <ContactTitle />

      <HomeContacts />

      <TextSlider text="Location" />

      <ContactLocation />
    </>
  );
}
