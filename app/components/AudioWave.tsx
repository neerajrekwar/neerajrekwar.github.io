// components/AudioWave.tsx
'use client'
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const waveVariants = {
    animate: {
        opacity: [0, 1, 0],
        scale: [0.8, 1.2, 0.8],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

interface AudioWaveProps {
    isPlaying: boolean;
}

const AudioWave: React.FC<AudioWaveProps> = ({ isPlaying }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <audio ref={audioRef} src="/background-audio.mp3" loop autoPlay />
            <div className="relative">
                <motion.div
                    className="absolute w-24 h-24 bg-blue-500 rounded-full"
                    variants={waveVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute w-24 h-24 bg-green-500 rounded-full"
                    variants={waveVariants}
                    animate="animate"
                    style={{ animationDelay: '0.5s' }}
                />
                <motion.div
                    className="absolute w-24 h-24 bg-red-500 rounded-full"
                    variants={waveVariants}
                    animate="animate"
                    style={{ animationDelay: '1s' }}
                />
            </div>
        </div>
    );
};

export default AudioWave;
