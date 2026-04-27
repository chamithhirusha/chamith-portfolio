"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Badge from "../badges/Badge";
import {
  CrossIcon,
  MenuIcon,
  SolidCameraIcon,
  SpecialStarIcon,
} from "../icons/Icons";
import { useRouter } from "next/navigation";
import Button from "../buttons/Button";
import SocialMediaIcon from "../buttons/SocialMediaIcon";
import { PROFILE } from "@/app/config.json";

const Header = () => {
  const { push } = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const SOCIAL_LINKS = [
    { type: "whatsapp", link: PROFILE.WHATSAPP.URL },
    { type: "linkedin", link: PROFILE.LINKEDIN.URL },
    { type: "facebook", link: PROFILE.FACEBOOK.URL },
    { type: "github", link: PROFILE.GITHUB.URL },
  ] as const;

  const navigate = (path: string) => {
    push(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* TOP BAR */}
      <div
        className={`flex items-center justify-between theme-default-padding-x fixed top-0 left-0 right-0 z-50 
        transition-all overflow-hidden duration-500 ease-in-out
        ${
          hidden
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "opacity-100 translate-y-0"
        }
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-md py-[10px]"
            : "bg-transparent py-[50px]"
        }`}
      >
        <div className="flex flex-row items-center gap-20">
          <div
            className="flex clickable flex-row items-center gap-4"
            onClick={() => navigate("/")}
          >
            <Image
              src="/images/avatar-200x200.jpg"
              alt="Logo"
              width={60}
              height={60}
              className={`rounded-full brightness-90 contrast-110 transition-all duration-500 ${
                scrolled
                  ? "w-10 h-10 sm:w-14 sm:h-14 grayscale"
                  : "w-12 h-12 sm:w-16 sm:h-16 grayscale-0"
              }`}
            />
            <div>
              <p className="font-bold text-md sm:text-lg">
                Chamith Hirusha
              </p>
              <p className="font-bold text-xs sm:text-sm uppercase theme-secondary">
                Full stack engineer
              </p>
            </div>
          </div>

          <Badge
            label="Open to work"
            showDot
            textColor="theme-secondary"
            className="sm:flex hidden theme-border-secondary-light"
            textClassName="uppercase"
          />
        </div>

        {/* MENU BUTTON */}
        <div
          className="flex items-center justify-center h-10 clickable"
          onClick={() => {
            setMenuOpen(true);
            setHidden(false);
          }}
        >
          <MenuIcon
            className="cursor-pointer stick-here size-12 md:size-18 lg:size-24"
            strokeWidth={0.5}
          />
        </div>
      </div>

      {/* MENU PANEL */}
      <div
        className={`fixed
        w-full h-full top-0 left-0
        md:w-auto md:h-auto md:top-5 md:right-18 md:left-auto
        px-[20px] py-[40px] md:px-[40px] md:py-[60px]
        gap-[40px] md:gap-[60px]
        rounded-none md:rounded-[20px]
        theme-bg-foreground z-[100] flex flex-col
        origin-top-right md:origin-top-right
        overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          menuOpen
            ? "opacity-100 scale-100 translate-y-0 blur-0 pointer-events-auto"
            : "opacity-0 scale-95 md:scale-50 -translate-y-5 blur-xl pointer-events-none"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between">
          <Badge
            label="Menu"
            textColor="theme-background"
            className="theme-border-inverted-foreground-overlay"
          />

          <div
            className="flex items-center justify-center h-13 aspect-square clickable"
            onClick={() => setMenuOpen(false)}
          >
            <CrossIcon
              className="cursor-pointer theme-background stick-here size-12 md:size-16 lg:size-18"
              strokeWidth={0.5}
            />
          </div>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-[10px] md:gap-[40px]">
          {[
            { label: "Homepage", path: "/" },
            { label: "Resume", path: "/" },
            { label: "Projects", path: "/" },
            { label: "Experience", path: "/" },
            { label: "About", path: "/" },
            { label: "Contacts", path: "/" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col menu-text justify-center h-[60px] md:h-[80px] overflow-hidden clickable"
              onClick={() => navigate(item.path)}
            >
              <div className="flex flex-row items-center gap-5">
                <SpecialStarIcon className="star size-3 md:size-5" />
                <h2 className="font-moho-condensed text-[48px] sm:text-[72px] md:text-[120px] font-bold uppercase">
                  {item.label}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex flex-col gap-[30px]">
          <Button
            text="Book a call"
            varient="secondary"
            className="text-[18px] md:text-[24px] xl:text-[32px] uppercase py-[10px]! px-[30px]! gap-[5px] lg:gap-[8px]"
            endIcon={<SolidCameraIcon className="size-8 lg:size-12" />}
          />

          <div className="flex justify-center items-center gap-[8px] md:gap-[20px]">
            {SOCIAL_LINKS.map((item) => (
              <SocialMediaIcon
                key={item.type}
                type={item.type}
                link={item.link}
                varient="secondary"
                className="scale-90 md:scale-100"
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;