
import React from "react";
import { Cover } from "@/app/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-four via-five to-six dark:from-neutral-800 dark:via-white dark:to-white">
        Balance innovation and stability<br /> at <Cover>warp speed</Cover>
      </h2>
    </div>
  );
}
