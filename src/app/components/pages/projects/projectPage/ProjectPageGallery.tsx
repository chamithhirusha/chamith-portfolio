import Image from "next/image";
import MotionElement from "../../../motion/MotionElement";

interface Props {
  imageFiles: string[];
}

export default function ProjectPageGallery({ imageFiles }: Props) {
  const top = imageFiles.slice(0, 3);
  const middle = imageFiles.slice(3, 4);
  const bottom = imageFiles.slice(4);

  return (
    <div className="theme-default-padding-y flex flex-col">
      {top.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {top.map((src, i) => (
            <MotionElement
              key={i}
              variant="scale"
              delay={i * 0.06}
              className="aspect-[4/5] relative"
            >
              <Image
                src={`/${src}`}
                alt={`img-${i}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={i === 0} // optional: only first image eager
              />
            </MotionElement>
          ))}
        </div>
      )}

      {middle.length > 0 && (
        <MotionElement variant="clip" className="w-full">
          <div className="aspect-[16/6] relative w-full">
            <Image
              src={`/${middle[0]}`}
              alt="middle"
              fill
              sizes="100vw"
              className="object-cover"
              priority // LCP candidate
            />
          </div>
        </MotionElement>
      )}

      {bottom.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {bottom.map((src, i) =>
            i === 0 ? (
              <MotionElement
                key={i}
                variant="slide-right"
                className="md:col-span-4 aspect-[16/9] relative"
              >
                <Image
                  src={`/${src}`}
                  alt={`bottom-${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                />
              </MotionElement>
            ) : (
              <MotionElement
                key={i}
                variant="slide-left"
                delay={0.08}
                className="md:col-span-1 aspect-[16/9] relative"
              >
                <Image
                  src={`/${src}`}
                  alt={`bottom-${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover"
                />
              </MotionElement>
            ),
          )}
        </div>
      )}
    </div>
  );
}
