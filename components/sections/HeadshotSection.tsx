import Image from "next/image";

const HEADSHOT_SRC = "/assets/Headshot.jpg";
const HAS_HEADSHOT = true;

export function HeadshotSection() {
  return (
    <div className="relative w-[276px] mx-auto lg:mx-0 shrink-0">
      <div className="relative aspect-[276/452] w-full rounded-md overflow-hidden bg-paleBlue-600">
        {HAS_HEADSHOT ? (
          <Image src={HEADSHOT_SRC} alt="Till Käeslin" fill className="object-cover" sizes="276px" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-inter text-body text-paleBlue-200">Photo</span>
          </div>
        )}
        <div className="absolute left-[31px] top-[37px] w-[37px] h-[54px] pointer-events-none">
          <Image src="/assets/LightningIcon.png" alt="" width={37} height={54} />
        </div>
        <div className="absolute left-[206px] top-[45px] w-[46px] h-[46px] pointer-events-none rotate-[8deg]">
          <Image src="/assets/CoffeeIcon.png" alt="" width={46} height={46} />
        </div>
        <div className="absolute left-[29px] top-[162px] w-[38px] h-[41px] pointer-events-none">
          <Image src="/assets/SwissFlagIcon.png" alt="" width={38} height={41} />
        </div>
        <div className="absolute left-[105px] top-[82px] w-[19px] h-[32px] pointer-events-none">
          <Image src="/assets/LanguageIcon.png" alt="" width={19} height={32} />
        </div>
        <div className="absolute left-[225px] top-[294px] w-[36px] h-[24px] pointer-events-none rotate-[-16deg]">
          <Image src="/assets/SaturnIcon.png" alt="" width={36} height={24} />
        </div>
      </div>
    </div>
  );
}
