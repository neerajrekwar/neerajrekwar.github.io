// components/Footer.tsx

'use client'

import {useState} from "react"
interface FooterProps {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
}

const [isPlaying, setIsPlaying] = useState(false);
const Footer: React.FC<FooterProps> = ({ isPlaying, setIsPlaying }) => {
    return (
        <footer className="fixed bottom-0 left-0 w-full p-4 bg-gray-800 text-white flex justify-center">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setIsPlaying(!isPlaying)}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </footer>
    );
};

export default Footer;
