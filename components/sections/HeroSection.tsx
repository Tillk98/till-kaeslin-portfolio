import { Brain, Laptop, Palette, Pencil, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

const TAGS: { label: string; icon: React.ReactNode; filled?: boolean }[] = [
  { label: "AI prototyping", icon: <Brain className="size-[18px]" /> },
  { label: "product design", icon: <Palette className="size-[18px]" /> },
  { label: "design engineering", icon: <Laptop className="size-[18px]" />, filled: true },
  { label: "professional writing", icon: <Pencil className="size-[18px]" /> },
  { label: "product management", icon: <Users className="size-[18px]" /> },
];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-neutral-white"
        style={{
          backgroundImage: "radial-gradient(circle, #C9EBFF 1px, transparent 1px)",
          backgroundSize: "13px 13px",
        }}
      />
      <div className="relative">
        <Container className="flex flex-col items-center gap-2xl py-xl">
          <div className="w-full max-w-[900px] flex items-end justify-center px-lg py-lg">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid" aria-hidden />
              <div className="absolute left-[-3px] top-[-3px] size-[6px] bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid" aria-hidden />
              <div className="absolute right-[-3px] top-[-3px] size-[6px] bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid" aria-hidden />
              <div className="absolute left-[-3px] bottom-[-3px] size-[6px] bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid" aria-hidden />
              <div className="absolute right-[-3px] bottom-[-3px] size-[6px] bg-neutral-white border-[0.5px] border-paleBlue-600 border-solid" aria-hidden />
              <p className="relative z-10 px-lg py-lg font-satoshi font-bold text-heading-3 text-neutral-black text-center">
                Bridging the gap between design & development
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-lg w-full">
            {TAGS.map(({ label, icon, filled }) => (
              <Tag key={label} variant={filled ? "filled" : "default"} icon={icon}>{label}</Tag>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
