"use client";

import { useEffect, useState } from "react";
import CircleButton from "@/app/components/buttons/CircleButton";
import MotionElement from "@/app/components/motion/MotionElement";
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
    <div
      id="home-header"
      className="relative h-screen min-h-[700px] overflow-hidden theme-default-padding-x theme-default-padding-y"
    >
      {/* Right side image */}
      <MotionElement
        variant="scale"
        duration={6}
        className="absolute bottom-40 sm:bottom-20 right-0 h-full"
      >
        <Image
          src="/images/background-image_1.jpg"
          alt="Background"
          width={1024}
          height={1536}
          quality={100}
          priority
          className="h-[120%] w-auto object-contain radial-mask cursor-none select-none pointer-events-none"
        />
      </MotionElement>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <MotionElement
          variant="slide-left"
          duration={3}
          delay={0.5}
          className="flex justify-end sm:justify-start items-end 2xl:items-center h-full"
        >
          <h1 className="flex font-moho-condensed text-[100px] md:text-[200px] xl:text-[250px] 2xl:text-[20vw] uppercase gap-0">
            {["C", "h", "a", "m", "i", "t", "h"].map((letter, index) => (
              <MotionElement
                key={index}
                variant="slide-left"
                duration={3}
                delay={0.5 + index * 0.08}
                className="inline-block"
              >
                <span>{letter}</span>
              </MotionElement>
            ))}
          </h1>
        </MotionElement>

        <div className="flex flex-row justify-between items-end gap-5">
          <MotionElement
            variant="slide-right"
            delay={0.16}
            className="text-xl font-bold leading-relaxed w-xs md:w-sm"
          >
            Currently based in Colombo, SL,{" "}
            <span className="tabular-nums">{time}</span>
          </MotionElement>

          <MotionElement variant="scale" delay={0.28}>
            <CircleButton
              text="Scroll"
              onClick={() => {
                document.getElementById("home-services")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </MotionElement>
        </div>
      </div>
    </div>
  );
}
