import Link from "../buttons/Link";
import SocialMediaIcon from "../buttons/SocialMediaIcon";
import { PROFILE } from "@/app/config.json";

const Footer = () => {
  const SOCIAL_LINKS = [
    { type: "whatsapp", link: PROFILE.WHATSAPP.URL },
    { type: "linkedin", link: PROFILE.LINKEDIN.URL },
    { type: "facebook", link: PROFILE.FACEBOOK.URL },
    { type: "github", link: PROFILE.GITHUB.URL },
  ] as const;

  return (
    <footer className="relative">
      <div className="theme-default-padding-x">
        <hr className="theme-border-secondary" />
      </div>

      <div className="flex flex-col gap-[50px] theme-default-padding-x theme-default-padding-y">
        {/* Row */}
        <div className="relative flex flex-col xl:flex-row gap-[30px] xl:gap-[20px] items-center justify-between w-full">
          {/* Left */}
          <div className="flex items-center gap-[20px]">
            <hr className="theme-border-secondary w-[20px]" />
            <h4 className="text-[18px] md:text-[24px] theme-secondary">
              Let’s get things done.
            </h4>
          </div>

          {/* Center (true screen center) */}
          <div className="relative xl:absolute w-full xl:w-auto left-1/2 -translate-x-1/2 flex justify-center items-center py-[10px] md:py-[20px] px-[10px] md:px-[50px] border-2 theme-border-secondary rounded-full">
            <h4 className="text-[18px] md:text-[24px] font-bold">
              <Link
                text={PROFILE.EMAIL.TEXT}
                link={PROFILE.EMAIL.URL}
                target="_blank"
              />
            </h4>
          </div>

          {/* Right */}
          <div className="flex items-center gap-[8px] md:gap-[20px]">
            {SOCIAL_LINKS.map((item) => (
              <SocialMediaIcon
                key={item.type}
                type={item.type}
                link={item.link}
                className="scale-90 md:scale-100"
              />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden flex-col xl:flex-row justify-center items-center w-full gap-[10px] lg:gap-[50px] font-moho-condensed font-black uppercase tracking-wider text-[128px] xl:text-[19vw] leading-[0.75]">
          <h1>Chamith</h1>

          <h1>Hirusha</h1>
        </div>

        <div className="w-full text-center theme-secondary text-[14px] md:text-[16px]">
          <p>© 2026 Chamith — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
