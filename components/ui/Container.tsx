import { type ReactNode } from "react";

const defaultContainerClass = "mx-auto max-w-7xl px-lg sm:px-xl lg:px-2xl";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className ? `${defaultContainerClass} ${className}` : defaultContainerClass}>
      {children}
    </div>
  );
}
