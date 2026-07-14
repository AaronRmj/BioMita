import type { ReactNode } from "react";


type CardProps = { className?: string; children: ReactNode };

export function Card({ className = "", children }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-stone-200/80 shadow-sm shadow-stone-200/40 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }: CardProps) {
  return <div className={`p-5 border-b border-stone-100 flex items-center justify-between ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }: CardProps) {
  return <h3 className={`font-semibold text-stone-900 text-[15px] tracking-tight ${className}`}>{children}</h3>;
}

export function CardContent({ className = "", children }: CardProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}