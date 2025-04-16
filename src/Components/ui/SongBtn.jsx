import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import song from "../../../public/Rington/song.mp3";

const SongBtn = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = async () => {
      if (audioRef.current && !hasInteracted) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (err) {
          console.warn("Autoplay blocked:", err);
        }
      }
    };

    // Attach listeners to detect *any* user interaction
    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={togglePlay}
        className="hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-200"
      >
        {isPlaying ? <FaStop size={20} /> : <FaPlay size={20} />}
      </button>
      <audio ref={audioRef} src={song} preload="auto" />
    </div>
  );
};

export default SongBtn;
