import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm shadow-sm transition-shadow placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-900/10 focus-visible:border-emerald-800 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };