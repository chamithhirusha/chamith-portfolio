import Badge from "../../badges/Badge";
import { SpecialStarIcon } from "../../icons/Icons";
import certifications from "@/app/data/certifications.json";

export default function AboutCertifications() {
  return (
    <>
      <div className="theme-default-padding-x">
        <hr className="theme-border-secondary" />
      </div>

      <div className="theme-default-padding-x theme-default-padding-y">
        <div className="flex flex-col xl:flex-row justify-between gap-[40px] xl:gap-[60px]">
          {/* Left Side */}
          <div className="xl:sticky xl:top-[120px] h-fit">
            <Badge
              label="Certifications"
              textColor="theme-foreground"
              className="theme-border-inverted-foreground-overlay uppercase"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-full xl:w-9/12">
            {certifications.map((certification, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="flex flex-col flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-[20px]">
                    {/* Content */}
                    <div className="flex gap-[14px] md:gap-[20px]">
                      <SpecialStarIcon className="size-3 md:size-4 theme-secondary mt-[8px] shrink-0" />

                      <div className="flex flex-col">
                        <h3 className="font-bold text-[18px] md:text-[24px] leading-snug">
                          {certification.name}
                        </h3>

                        <div className="flex flex-col md:flex-row md:items-center md:gap-[12px] mt-[4px]">
                          <p className="text-sm md:text-base theme-secondary leading-relaxed mt-[4px]">
                            {certification.issuer}
                          </p>

                          {certification.credentialUrl && (
                            <a
                              href={certification.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm md:text-base font-bold theme-foreground hover:underline mt-[4px]"
                            >
                              {certification.credentialId
                                ? `Credential ID: ${certification.credentialId}`
                                : "Verify Credential"}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Year */}
                    <div className="sm:min-w-[80px] sm:text-right">
                      <p className="theme-foreground font-bold text-sm md:text-base capitalize">
                        {certification.year}
                      </p>
                    </div>
                  </div>

                  {index !== certifications.length - 1 && (
                    <hr className="theme-border-secondary mt-[24px] mb-[24px]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
