
import React from "react";
import { Cover } from "@/app/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h2 className="text-3xl  lg:text-5xl  font-semibold max-w-7xl my-10 relative z-20  font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
        Balance innovation and stability<br /> at <Cover>warp speed</Cover>
      </h2>
    </div>
  );
}
