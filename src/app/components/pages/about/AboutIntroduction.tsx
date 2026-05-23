import Image from "next/image";
import CircleButton from "../../buttons/CircleButton";
import MotionElement from "../../motion/MotionElement";
import { useRouter } from "next/navigation";
import stats from "@/app/data/stats.json";

export default function AboutIntroduction() {
  const { push } = useRouter();

  return (
    <div className="theme-default-padding-x theme-default-padding-ye">
      <MotionElement
        variant="clip"
        className="flex justify-center md:justify-end"
      >
        <h3 className="font-moho-condensed text-center md:text-end tracking-wide leading-tight font-bold text-[50px] md:text-[110px] w-auto xl:w-9/12 uppercase">
          I&apos;m Chamith Hirusha, a Full Stack Developer who excels at
          bridging the gap between UI/UX design and high-performance
          engineering.
        </h3>
      </MotionElement>
      <div className="flex flex-col flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start gap-[50px] mt-[50px]">
        <div className="w-auto xl:w-4/12">
          <MotionElement variant="slide-right" className="w-full">
            <div className="flex items-center py-[25px]">
              <div className="flex justify-center items-center h-[100px]">
                <h4 className="font-moho-condensed font-bold text-[50px] md:text-[80px] xl:text-[128px] w-[60px] md:w-[80px] xl:w-[130px]">
                  {stats.projects}
                </h4>
              </div>
              <p className="font-bold text-[18px] md:text-[24px]">
                Completed Projects
              </p>
            </div>
            <hr className="theme-border-secondary w-full" />
          </MotionElement>

          <MotionElement variant="slide-right" delay={0.08} className="w-full">
            <div className="flex items-center py-[25px]">
              <div className="flex justify-center items-center h-[100px]">
                <h4 className="font-moho-condensed font-bold text-[50px] md:text-[80px] xl:text-[128px] w-[60px] md:w-[80px] xl:w-[130px]">
                  {stats.experience}
                </h4>
              </div>
              <p className="font-bold text-[18px] md:text-[24px]">
                Years of Experience
              </p>
            </div>
            <hr className="theme-border-secondary w-full" />
          </MotionElement>

          <MotionElement variant="slide-right" delay={0.16} className="w-full">
            <div className="flex items-center py-[25px]">
              <div className="flex justify-center items-center h-[100px]">
                <h4 className="font-moho-condensed font-bold text-[50px] md:text-[80px] xl:text-[128px] w-[60px] md:w-[80px] xl:w-[130px]">
                  {stats.collaborations}
                </h4>
              </div>
              <p className="font-bold text-[18px] md:text-[24px]">
                Collaborations
              </p>
            </div>
            <hr className="theme-border-secondary w-full" />
          </MotionElement>

          <MotionElement
            variant="scale"
            delay={0.22}
            className="flex justify-center md:justify-end pt-[50px]"
          >
            <CircleButton
              onClick={() => push("/projects")}
              text="All Works"
              arrowDirection="up-right"
            />
          </MotionElement>
        </div>

        <MotionElement variant="scale" className="relative flex justify-center">
          <div className="relative w-[350px] lg:w-[400px] xl:w-[600px] aspect-[5/7] rounded-[20px] md:rounded-[50px] overflow-hidden">
            <Image
              src="/images/about-image.jpg"
              alt="Background"
              width={1024}
              height={1536}
              quality={100}
              priority
              className="w-full h-full object-cover"
            />

            {/* Vignette overlay */}
            <div
              className="absolute inset-0 pointer-events-none
                        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.9)_100%)]
                      "
            />
          </div>
        </MotionElement>
      </div>
    </div>
  );
}
