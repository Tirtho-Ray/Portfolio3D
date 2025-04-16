import { useRef, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import song from "../../../public/Rington/song.mp3";

const SongBtn = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={togglePlay}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition duration-300"
      >
        {isPlaying ? <FaStop size={20} /> : <FaPlay size={20} />}
      </button>
      <audio ref={audioRef} src={song.src} preload="auto" />
    </div>
  );
};

export default SongBtn;
