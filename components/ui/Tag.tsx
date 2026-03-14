import { type ReactNode } from "react";

type TagVariant = "default" | "filled";

type TagProps = {
  variant?: TagVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

const variantStyles: Record<TagVariant, string> = {
  default:
    "bg-neutral-white border border-paleBlue-950 text-paleBlue-950",
  filled:
    "bg-paleBlue-900 text-neutral-white border border-transparent",
};

export function Tag({ variant = "default", icon, children, className = "" }: TagProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-md py-sm rounded-pill font-inter font-bold text-label shrink-0";
  const combined = `${base} ${variantStyles[variant]} ${className}`.trim();
  return (
    <span className={combined}>
      {icon ? <span className="size-[18px] shrink-0 [&>svg]:size-full">{icon}</span> : null}
      {children}
    </span>
  );
}
