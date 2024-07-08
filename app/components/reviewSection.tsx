import { InfiniteMovingCardsDemo } from "./infiniteCard";

export function ReviewSection() {
    return (
        <>
            <div className="justify-start m-auto max-w-6xl text-semibold flex items-center gap-2 sm:gap-1 py-10 text-2xl text-primaryText visible sm:text-4xl">
                <div className="text-secondaryText text-4xl sm:text-6xl sm:mx-2">&#8226;</div>
                Recent projects
            </div>
            <InfiniteMovingCardsDemo />
        </>
    );
};