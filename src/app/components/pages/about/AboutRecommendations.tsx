import Image from "next/image";
import Badge from "../../badges/Badge";
import CircleButton from "../../buttons/CircleButton";
import MotionElement from "../../motion/MotionElement";
import recommendations from "@/app/data/recommendations.json";
import profile from "@/app/data/profile.json";

export default function AboutRecommendations() {
  const mobileItemCount = 3;
  const desktopItemCount = recommendations.length;

  return (
    <>
      <div className="theme-default-padding-x">
        <hr className="theme-border-secondary" />
      </div>

      <div className="theme-default-padding-x theme-default-padding-y">
        <div className="flex flex-col xl:flex-row justify-between gap-[60px]">
          <div className="xl:sticky xl:top-[120px] h-fit">
            <Badge
              label="Recommendations"
              textColor="theme-foreground"
              className="theme-border-inverted-foreground-overlay uppercase"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[60px] xl:w-9/12">
            {recommendations.slice(0, desktopItemCount).map((rec, index) => {
              const isHiddenOnMobile = index >= mobileItemCount;

              return (
                <MotionElement
                  key={index}
                  variant="tilt"
                  delay={index * 0.06}
                  className={`${
                    isHiddenOnMobile ? "hidden md:flex" : "flex"
                  } flex-col`}
                >
                  <div className="flex mb-[20px] gap-[20px]">
                    <div className="relative w-[48px] h-[48px] md:w-[62px] md:h-[62px] shrink-0 border theme-border-secondary-light rounded-full overflow-hidden">
                      <Image
                        src={rec.photoUrl}
                        alt={rec.name}
                        fill
                        sizes="(max-width: 768px) 48px, 62px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold capitalize">
                        {rec.name}
                      </h3>

                      <h4 className="text-sm font-bold theme-secondary uppercase">
                        {rec.position}
                      </h4>
                    </div>
                  </div>

                  <p className="theme-bg-overlay p-5 rounded-[15px] text-sm md:text-base theme-secondary leading-relaxed whitespace-pre-line">
                    {rec.recommendation}{" "}
                    {rec.source && (
                      <>
                        <br />
                        <br />
                        <a
                          href={rec.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline font-bold theme-secondary text-sm"
                        >
                          [ {rec.source} ]
                        </a>
                      </>
                    )}
                  </p>
                </MotionElement>
              );
            })}

            <MotionElement
              variant="scale"
              className="flex justify-end items-center lg:justify-end lg:items-end"
            >
              <CircleButton
                onClick={() =>
                  window.open(
                    profile.social.linkedin.href + "details/recommendations/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                text="Recommend me"
                arrowDirection="up-right"
              />
            </MotionElement>
          </div>
        </div>
      </div>
    </>
  );
}
