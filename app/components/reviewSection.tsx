import { InfiniteMovingCardsDemo } from "./infiniteCard";
import { motion } from "framer-motion";

export function ReviewSection() {
    return (
        <>
            <div>
                <div className="justify-start text-secondary pl-2 max-w-6xl m-auto font-semibold flex items-center gap-2 sm:gap-1 py-10 text-2xl visible sm:text-4xl">
                    <div className="text-4xl text-third sm:text-5xl sm:mx-2">
                        &#8226;
                    </div>
                    What others have to say
                </div>
               
            </div>
            <InfiniteMovingCardsDemo />
        </>
    );
}
