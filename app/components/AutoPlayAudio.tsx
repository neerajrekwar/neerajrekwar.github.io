'use client'
import { useEffect, useRef, useState } from 'react';

const AutoPlayAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Failed to play audio:', err);
      }
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    handlePlay();
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/background-audio.mp3" />
      {isPlaying ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handlePlay}>Play</button>
      )}
    </div>
  );
};

export default AutoPlayAudio;
