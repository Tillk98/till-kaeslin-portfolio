import { type ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-paleBlue-800 text-neutral-white border border-transparent hover:bg-paleBlue-900",
  outline:
    "bg-transparent border-[1.5px] border-paleBlue-700 text-paleBlue-700 hover:border-paleBlue-600 hover:text-paleBlue-600",
};

export function Button({
  variant = "primary",
  children,
  href,
  icon,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-lg py-sm rounded-xs font-inter font-bold text-body shrink-0";
  const combined = `${base} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combined} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {icon ?? null}
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={combined}>
      {icon ?? null}
      {children}
    </button>
  );
}
