"use client";

import ContactLocation from "../components/pages/contacts/ContactLocation";
import ContactTitle from "../components/pages/contacts/ContactTitle";
import HomeContacts from "../components/pages/home/HomeContacts";
import MotionSection from "../components/motion/MotionSection";
import TextSlider from "../components/sliders/TextSlider";

export default function Contacts() {
  return (
    <>
      <MotionSection>
        <ContactTitle />
      </MotionSection>
      <MotionSection>
        <HomeContacts />
      </MotionSection>
      <MotionSection>
        <TextSlider text="Location" />
      </MotionSection>
      <MotionSection>
        <ContactLocation />
      </MotionSection>
    </>
  );
}
