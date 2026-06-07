import Image from "next/image";

const HEADSHOT_SRC = "/assets/TillKaeslinHeadshot.jpg";
const HAS_HEADSHOT = true;

interface TooltipIconProps {
  src: string;
  width: number;
  height: number;
  containerClassName: string;
  imageWrapperClassName?: string;
  tooltipTitle: string;
  tooltipDescription: string;
  tooltipDescriptionClassName?: string;
  tooltipContainerClassName?: string;
  tooltipPosition: "above" | "left";
}

function TooltipIcon({
  src,
  width,
  height,
  containerClassName,
  imageWrapperClassName,
  tooltipTitle,
  tooltipDescription,
  tooltipDescriptionClassName,
  tooltipContainerClassName,
  tooltipPosition,
}: TooltipIconProps) {
  const tooltipPositionClass =
    tooltipPosition === "left"
      ? "right-[calc(100%+8px)] top-1/2 -translate-y-1/2"
      : "bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2";

  return (
    <div className={`absolute group cursor-default ${containerClassName}`}>
      <div className={imageWrapperClassName}>
        <Image src={src} alt="" width={width} height={height} />
      </div>
      <div
        className={`absolute ${tooltipPositionClass} opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-[5] bg-neutral-white border-[0.5px] border-solid border-paleBlue-600 rounded-xs px-md py-sm flex flex-col items-center gap-xs text-center ${tooltipContainerClassName || ""}`}
      >
        <p className="text-[10px] leading-[14px] font-inter font-medium text-neutral-black whitespace-nowrap">
          {tooltipTitle}
        </p>
        <p className={`text-[8px] leading-[12px] font-inter font-medium text-blueGrey-400 ${tooltipDescriptionClassName || ""}`}>
          {tooltipDescription}
        </p>
      </div>
    </div>
  );
}

export function HeadshotSection() {
  return (
    <div className="relative w-[276px] mx-auto lg:mx-0 shrink-0">
      <div className="relative aspect-[276/452] w-full">
        {/* White fill — behind image */}
        <div className="absolute inset-0 bg-neutral-white" aria-hidden />

        <div className="absolute inset-0 overflow-hidden z-[1]">
          {HAS_HEADSHOT ? (
            <Image src={HEADSHOT_SRC} alt="Till Käeslin" fill className="object-cover" sizes="276px" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-inter text-body text-paleBlue-200">Photo</span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 z-[4]">
        <TooltipIcon
          src="/assets/CoffeeIcon.png"
          width={46}
          height={46}
          containerClassName="left-[206px] top-[45px]"
          imageWrapperClassName="rotate-[8deg]"
          tooltipTitle="Coffee Enthusiast"
          tooltipDescription="My Google Maps is a café guide to the city."
          tooltipDescriptionClassName="w-[113px]"
          tooltipPosition="above"
        />
        <TooltipIcon
          src="/assets/DogIcon.png"
          width={49}
          height={46}
          containerClassName="left-[215px] top-[294px]"
          tooltipTitle="<3 Belongs to Dogs"
          tooltipDescription="Not much more to say - dog lover. Brother / uncle to Black Lab, Umi."
          tooltipDescriptionClassName="w-[135px]"
          tooltipPosition="left"
        />
        <TooltipIcon
          src="/assets/SwissFlagIcon.png"
          width={38}
          height={41}
          containerClassName="left-[29px] top-[162px]"
          tooltipTitle="Swiss / American"
          tooltipDescription="Born in Switzerland, raised in the US and Hong Kong, China. Living in Berlin, Germany."
          tooltipDescriptionClassName="w-[135px]"
          tooltipPosition="above"
        />
        <TooltipIcon
          src="/assets/LanguageIcon.png"
          width={19}
          height={32}
          containerClassName="left-[105px] top-[82px]"
          tooltipTitle="Language Learner"
          tooltipDescription="English, Swiss German, German, French & Mandarin Chinese 🤓"
          tooltipContainerClassName="w-[150px]"
          tooltipPosition="above"
        />
        </div>

        {/* Border on top of image so it isn't covered by full-bleed photo */}
        <div className="absolute inset-0 border-[0.5px] border-paleBlue-600 border-solid pointer-events-none z-[3]" aria-hidden />
        <div className="absolute left-[-3px] top-[-3px] size-[6px] bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid z-[3]" aria-hidden />
        <div className="absolute right-[-3px] top-[-3px] size-[6px] bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid z-[3]" aria-hidden />
        <div className="absolute left-[-3px] bottom-[-3px] size-[6px] bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid z-[3]" aria-hidden />
        <div className="absolute right-[-3px] bottom-[-3px] size-[6px] bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid z-[3]" aria-hidden />
      </div>
    </div>
  );
}
