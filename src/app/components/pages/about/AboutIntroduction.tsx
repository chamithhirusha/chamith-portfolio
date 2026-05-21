import Image from "next/image";
import CircleButton from "../../buttons/CircleButton";
import { useRouter } from "next/navigation";

export default function AboutIntroduction() {
  const { push } = useRouter();

  return (
    <div className="theme-default-padding-x theme-default-padding-ye">
      <div className="flex justify-center md:justify-end">
        <h3 className="font-moho-condensed text-center md:text-end tracking-wide leading-tight font-bold text-[50px] md:text-[110px] w-auto xl:w-9/12 uppercase">
          Hi there. I&apos;m Chamith Hirusha, a creative digital designer
          dedicated to turning concepts into stunning visual experiences.
        </h3>
      </div>
      <div className="flex flex-col flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start gap-[50px] mt-[50px]">
        <div className="w-auto xl:w-4/12">
          <div className="w-full">
            <div className="flex items-center py-[25px]">
              <div className="flex justify-center items-center h-[100px]">
                <h4 className="font-moho-condensed font-bold text-[50px] md:text-[80px] xl:text-[128px] w-[60px] md:w-[80px] xl:w-[130px]">
                  31
                </h4>
              </div>
              <p className="font-bold text-[18px] md:text-[24px]">
                Completed Projects
              </p>
            </div>
            <hr className="theme-border-secondary w-full" />
          </div>

          <div className="w-full">
            <div className="flex items-center py-[25px]">
              <div className="flex justify-center items-center h-[100px]">
                <h4 className="font-moho-condensed font-bold text-[50px] md:text-[80px] xl:text-[128px] w-[60px] md:w-[80px] xl:w-[130px]">
                  05
                </h4>
              </div>
              <p className="font-bold text-[18px] md:text-[24px]">
                Years of Experience
              </p>
            </div>
            <hr className="theme-border-secondary w-full" />
          </div>

          <div className="w-full">
            <div className="flex items-center py-[25px]">
              <div className="flex justify-center items-center h-[100px]">
                <h4 className="font-moho-condensed font-bold text-[50px] md:text-[80px] xl:text-[128px] w-[60px] md:w-[80px] xl:w-[130px]">
                  04
                </h4>
              </div>
              <p className="font-bold text-[18px] md:text-[24px]">
                Collaborations
              </p>
            </div>
            <hr className="theme-border-secondary w-full" />
          </div>

          <div className="flex justify-center md:justify-end pt-[50px]">
            <CircleButton
              onClick={() => push("/projects")}
              text="All Works"
              arrowDirection="up-right"
            />
          </div>
        </div>

        <div className="relative flex justify-center">
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
        </div>
      </div>
    </div>
  );
}
