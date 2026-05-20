import Badge from "../../badges/Badge";
import CircleButton from "../../buttons/CircleButton";
import Image from "next/image";

export default function AboutRecommendations() {
  const recommendations = [
    {
      name: "John Doe",
      designation: "Senior Software Engineer at Meta",
      profileImage: "/images/avatar-200x200.jpg",
      recommendation:
        "Chamith is an exceptional frontend engineer with a keen eye for detail and a passion for creating seamless user experiences. His ability to translate complex design concepts into pixel-perfect implementations is truly impressive. He consistently delivers high-quality work, meets deadlines, and is a great team player. I highly recommend Chamith for any frontend development role.",
    },
    {
      name: "Jane Smith",
      designation: "UI/UX Designer at Google",
      profileImage: "/images/avatar-200x200.jpg",
      recommendation:
        "Chamith is a talented UI/UX designer who consistently produces visually stunning and user-friendly designs. His creativity, attention to detail, and ability to understand user needs are remarkable. He is a pleasure to work with, always open to feedback, and delivers exceptional results. I highly recommend Chamith for any UI/UX design role.",
    },
    {
      name: "Michael Johnson",
      designation: "Full Stack Developer at Amazon",
      profileImage: "/images/avatar-200x200.jpg",
      recommendation:
        "Chamith is a skilled full stack developer with expertise in both frontend and backend technologies. He has a strong problem-solving mindset, excellent coding skills, and a deep understanding of software architecture. He consistently delivers high-quality code, meets project deadlines, and is a great collaborator. I highly recommend Chamith for any full stack development role.",
    },
    {
      name: "Emily Davis",
      designation: "DevOps Engineer at Microsoft",
      profileImage: "/images/avatar-200x200.jpg",
      recommendation:
        "Chamith is a proficient DevOps engineer with a solid understanding of cloud infrastructure, automation, and continuous integration. He has a strong work ethic, excellent communication skills, and a collaborative approach to problem-solving. He consistently delivers reliable and scalable solutions, making him an asset to any DevOps team. I highly recommend Chamith for any DevOps engineering role.",
    },
  ];

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
                <div
                  key={index}
                  className={`${
                    isHiddenOnMobile ? "hidden md:flex" : "flex"
                  } flex-col`}
                >
                  <div className="flex mb-[20px] gap-[20px] items-center">
                    <div className="relative flex h-[48px] md:h-[62px] aspect-square border theme-border-secondary-light rounded-full overflow-hidden">
                      <Image
                        src={rec.profileImage}
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
                        {rec.designation}
                      </h4>
                    </div>
                  </div>

                  <p className="theme-bg-overlay p-5 rounded-[15px] text-sm md:text-base theme-secondary leading-relaxed">
                    {rec.recommendation}
                  </p>
                </div>
              );
            })}

            <div className="flex justify-end items-center lg:justify-end lg:items-end">
              <CircleButton text="Recommend me" arrowDirection="up-right" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
