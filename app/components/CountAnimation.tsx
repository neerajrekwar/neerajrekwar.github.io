// components/CountAnimation.tsx
"use client"; // components/CountAnimation.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Roboto_Mono, Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({
    weight: "400",
    subsets: ["latin"],
});

const CountAnimation = () => {
    const [countF, setCountF] = useState(0);
    const [directionF, setDirectionF] = useState(1);

    const [countS, setCountS] = useState(0);
    const [directionS, setDirectionS] = useState(1); // 1 for forward, -1 for reverse

    useEffect(() => {
        const intervalF = setInterval(() => {
            setCountF((prevCountF) => {
                if (prevCountF === 2 && directionF === 1) {
                    setDirectionF(-1);
                    return prevCountF;
                } else if (prevCountF === 0 && directionF === -1) {
                    setDirectionF(1);
                    return prevCountF;
                }
                return prevCountF + directionF;
            });
        }, 1000);
        return () => clearInterval(intervalF);
    }, [directionF]);

    useEffect(() => {
        const intervalS = setInterval(() => {
            setCountS((prevCountS) => {
                if (prevCountS === 9 && directionS === 1) {
                    setDirectionS(-1);
                    return prevCountS;
                } else if (prevCountS === 0 && directionS === -1) {
                    setDirectionS(1);
                    return prevCountS;
                }
                return prevCountS + directionS;
            });
        }, 1000); // Update every second

        return () => clearInterval(intervalS);
    }, [directionS]);

    return (
        <>
            <div>
                <div className={source_code_pro.className}>
                    <div className="flex flex-row gap-2 border-2 rounded-lg border-four p-2">
                        <div className="text-4xl font-bold text-five border-five border-2 w-10 flex justify-center overflow-hidden h-16 items-center rounded-lg">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={countF}
                                    initial={{
                                        opacity: 1,
                                        y: directionF === 1 ? 20 : -10,
                                    }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{
                                        opacity: 1,
                                        y: directionF === 1 ? -20 : 10,
                                    }}
                                    transition={{ restSpeed: 1000 }}
                                >
                                    {countF}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="text-4xl font-bold text-five border-five border-2 w-10 flex justify-center overflow-hidden h-16 items-center rounded-lg">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={countS}
                                    initial={{
                                        opacity: 1,
                                        y: directionS === 1 ? -20 : 10,
                                    }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{
                                        opacity: 1,
                                        y: directionS === 1 ? 20 : -10,
                                    }}
                                    transition={{ restSpeed: 1000 }}
                                >
                                    {countS}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountAnimation;
