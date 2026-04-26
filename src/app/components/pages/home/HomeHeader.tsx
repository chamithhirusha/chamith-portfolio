"use client";

import { useEffect, useState } from "react";
import CircleButton from "@/app/components/buttons/CircleButton";
import Image from "next/image";

function formatColomboTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Colombo",
  }).format(date);
}

export default function HomeHeader() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(formatColomboTime(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home-header" className="relative h-screen min-h-[700px] overflow-hidden theme-default-padding-x theme-default-padding-y">
      {/* Right side image */}
      <div className="absolute bottom-40 sm:bottom-20 right-0 h-full">
        <Image
          src="/images/background-image.png"
          alt="Background"
          width={1024}
          height={1536}
          quality={100}
          priority
          className="h-[120%] w-auto object-contain radial-mask cursor-none select-none pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-end sm:justify-start items-end 2xl:items-center h-full">
          <h1 className="font-moho-condensed text-[100px] md:text-[200px] xl:text-[250px] 2xl:text-[400px] uppercase">
            Chamith
          </h1>
        </div>

        <div className="flex flex-row justify-between items-end gap-5">
          <p className="text-xl font-bold leading-relaxed w-xs md:w-sm">
            Currently based in Colombo, SL,{" "}
            <span className="tabular-nums">{time}</span>
          </p>

          <CircleButton
            text="Scroll"
            onClick={() => {
              document.getElementById("home-services")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
