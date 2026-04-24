"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Badge from "../badges/Badge";
import { MenuIcon } from "../icons/Icons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

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
          <div className="flex flex-row items-center gap-4">
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
              <p className="font-bold text-md sm:text-lg">Chamith Hirusha</p>
              <p className="font-bold text-xs sm:text-sm uppercase theme-secondary">
                Full stack engineer
              </p>
            </div>
          </div>
          <Badge label="Open to work" showDot textColor="theme-secondary" className="sm:flex hidden" textClassName="uppercase" />
        </div>

        <div className="flex items-center justify-center h-10 clickable">
          <MenuIcon
            className="cursor-pointer stick-here size-12 md:size-18 lg:size-24"
            strokeWidth={0.5}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
