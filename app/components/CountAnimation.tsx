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
            <div className="h-80 w-80 bg-custom-radial">
                <div className="h-[9rem] w-[9rem]  p-2 border-five rounded-[28px] bg-[#b584ff2b]">
                    <div className="relative h-[8rem] w-[6rem] flex  items-center overflow-hidden justify-center rounded-[28px] shadow-[inset_0px_1px_38px_28px_#e9d8fd]">
                        
                        <motion.div
                            className="absolute w-80 h-80 bg-blue-500 bg-conic-gradient-angles rounded-full overflow-hidden "
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 60,
                                ease: "linear",
                            }}
                        />
                        <div className="z-10 relative flex justify-center items-center  h-[6rem] w-[6rem] rounded-[28px] shadow-[inset_0px_1px_10px_10px_#e8c8ff4a]">
                            <div className={source_code_pro.className}>
                                <motion.div
                                    className="flex flex-row overflow-hidden gap-1 text-black justify-center items-center rounded-2xl text h-[60px] w-[60px] ">
                                    <div className="text-3xl  border-2 font-bold shadow-custom bg-[#eddcfd] h-12 w-8 flex justify-center overflow-hidden shadow-lg items-center rounded-lg">
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
                                                transition={{ restSpeed: 1800 }}
                                            >
                                                {countF}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    <div className="text-3xl font-bold shadow-custom bg-[#eddcfd] h-12 w-8 flex justify-center overflow-hidden shadow-lg items-center rounded-lg">
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
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           </div>
        </>
    );
};



export default CountAnimation;

