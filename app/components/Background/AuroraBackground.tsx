"use client";
import React, { ReactNode } from "react";

import { cn } from "@utils/cn";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col  h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  transition-bg w-full overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          //   I'm sorry but this is what peak developer performance looks like 🥲
          className={cn(
            `[--aurora:repeating-linear-gradient(100deg,var(--dusky-rose)_10%,var(--muted-terracotta)_15%,var(--soft-blush)_20%,var(--greyish-mauve)_25%,var(--deep-slate-grey)_30%)]
							[background-image:var(--aurora)]
							dark:[background-image:var(--aurora)]
							[background-size:300%,_200%]
							[background-position:50%_50%,50%_50%]
							filter blur-[10px] // reduce blur for sharper image
							after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)]
							after:dark:[background-image:var(--aurora)]
							after:[background-size:200%,_100%]
							after:animate-aurora after:[background-attachment:fixed] after:mix-blend-overlay // Adjust blend mode to overlay
							pointer-events-none
							absolute -inset-[10px] opacity-75 will-change-transform`, //Increased opacity for brighter colors
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_center, black_10%, transparent_70%)]",
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
