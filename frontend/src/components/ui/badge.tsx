import type { ReactNode } from "react";


//composant badge utilisable dans tout l application

type BadgeTone = "default" | "green" | "greenSolid" | "black" | "outline";

type BadgeProps = {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
};

const toneStyles: Record<BadgeTone, string> = {
  default: "bg-stone-100 text-stone-700",
  green: "bg-emerald-100 text-emerald-900",
  greenSolid: "bg-emerald-900 text-white",
  black: "bg-stone-900 text-white",
  outline: "border border-stone-300 text-stone-600",
};

export function Badge({ tone = "default", className = "", children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium ${toneStyles[tone]} ${className}`}>
      {children}
    </span>
  );
}