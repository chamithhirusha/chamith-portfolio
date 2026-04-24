import Link from "../buttons/Link";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="theme-default-padding-x">
        <hr className="theme-border-secondary" />
      </div>

      <div className="flex flex-col theme-default-padding-x theme-default-padding-y">
        {/* Row */}
        <div className="relative flex items-center justify-between w-full">
          {/* Left */}
          <div className="flex items-center gap-[20px]">
            <hr className="theme-border-secondary w-[20px]" />
            <h4 className="text-[24px] theme-secondary">
              Let’s get things done.
            </h4>
          </div>

          {/* Right */}
          <div className="flex items-center gap-[20px]">
            <h4 className="text-[24px] theme-secondary">whatsapp</h4>
            <hr className="theme-border-secondary w-[20px]" />
          </div>

          {/* Center (true screen center) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center py-[20px] px-[20px] border-2 theme-border-secondary rounded-full">
            <h4 className="text-[24px] font-bold">
              <Link
                text="chamithhirusha99@gmail.com"
                link="mailto:chamithhirusha99@gmail.com"
              />
            </h4>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <h1 className="font-moho-condensed font-black uppercase text-[20vw] leading-none whitespace-nowrap text-center">
            Chamith Hirusha
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
