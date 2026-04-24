import Button from "../../buttons/Button";
import Link from "../../buttons/Link";
import { SolidCameraIcon } from "../../icons/Icons";
import Checkbox from "../../inputs/Checkbox";
import TextArea from "../../inputs/TextArea";
import TextField from "../../inputs/TextField";

const contactData = [
  {
    label: "e-mail",
    value: "chamithhirusha99@gmail.com",
    url: "mailto:chamithhirusha99@gmail.com",
  },
  {
    label: "Phone",
    value: "+94 77 843 8869",
    url: "tel:+94778438869",
  },
  {
    label: "Location",
    value: "Colombo, Sri Lanka",
    url: "",
  },
];

export default function HomeContacts() {
  return (
    <div className="flex flex-col lg:flex-row theme-default-padding-x theme-default-padding-y gap-[50px] md:gap-[80px]">
      {/* LEFT */}
      <div className="flex flex-col w-full gap-[20px]">
        <div className="mb-[50px]">
          <Button
            text="Book a call"
            className="text-[18px] md:text-[24px] xl:text-[32px] uppercase py-[10px]! px-[30px]! gap-[5px] lg:gap-[8px]"
            endIcon={<SolidCameraIcon className="size-8 lg:size-12" />}
          />
        </div>
        {contactData.map((item, index) => (
          <div key={index} className="flex flex-col gap-[20px] w-full">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[10px] md:gap-[20px]">
              <h3 className="text-[16px] md:text-[18px] xl:text-[24px] font-bold theme-secondary uppercase">
                {item.label}
              </h3>

              <h4 className="text-[18px] md:text-[24px] xl:text-[32px] font-bold text-left sm:text-right">
                {item.url ? (
                  <Link text={item.value} link={item.url} />
                ) : (
                  <span>{item.value}</span>
                )}
              </h4>
            </div>

            <hr className="theme-border-secondary" />
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="flex flex-col w-full xl:w-5/8 theme-bg-overlay rounded-[10px] md:rounded-[20px] px-[20px] md:px-[40px] py-[10px] md:py-[20px] gap-[30px]">
        <div className="flex flex-col w-full">
          <TextField
            placeholder="Your Name"
            className="text-[18px] md:text-[24px]"
          />
          <TextField
            placeholder="Your E-Mail"
            className="text-[18px] md:text-[24px]"
          />
          <TextField
            placeholder="Phone"
            className="text-[18px] md:text-[24px]"
          />
          <TextArea
            placeholder="Describe your project..."
            className="text-[18px] md:text-[24px] h-[200px] md:h-[350px] max-h-[300px] md:max-h-[400px]"
            rows={60}
          />
        </div>
        <Checkbox
          label="I agree to the terms and conditions"
          labelClassName="text-[18px] md:text-[24px] font-bold theme-secondary"
          className="p-3 mr-[10px]"
        />
        <Button
          text="Send Message"
          varient="secondary"
          className="text-[18px] md:text-[24px] xl:text-[32px] uppercase py-[10px]! px-[10px]! md:mb-[20px]"
        />
      </div>
    </div>
  );
}
