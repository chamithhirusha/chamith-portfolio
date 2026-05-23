import MotionElement from "../../motion/MotionElement";

export default function ContactTitle() {
  return (
    <div className="theme-default-padding-x theme-default-padding-y">
      <hr className="theme-border-secondary mt-[140px] md:mt-[80px] mb-[25px] md:mb-[0px]" />
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-[50px] lg:gap-[100px] py-[10px]">
        <MotionElement variant="clip">
          <h1 className="font-moho-condensed text-[100px] md:text-[180px] xl:text-[200px] uppercase">
            <span className="flex items-center h-[80px] md:h-[160px]">
              Contacts
            </span>
          </h1>
        </MotionElement>
        <MotionElement
          variant="slide-left"
          delay={0.12}
          className="text-center lg:text-start text-[18px] md:text-[24px] xl:text-[28px] theme-secondary"
        >
          Have a project in mind? Let&apos;s create something amazing together.
        </MotionElement>
      </div>
      <hr className="theme-border-secondary mt-[25px] md:mt-[0px]" />
    </div>
  );
}
