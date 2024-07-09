import { InfiniteMovingCardsDemo } from "./infiniteCard";
import { motion } from "framer-motion";

export function ReviewSection() {
    return (
        <>
            <div className="justify-start text-semibold flex items-center gap-2 sm:gap-1 py-10 text-2xl text-secondaryText font-semibold visible sm:text-4xl">
                <div className="text-thirdText text-4xl sm:text-6xl sm:mx-2">
                  &#8226;
                </div>
                Recent projects
              </div>
            <div 
              className="border-2 border-sBorder max-w-fit"
              >
             
            </div>
            <InfiniteMovingCardsDemo />
        </>
    );
}
