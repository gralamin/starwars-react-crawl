import { useRef, forwardRef, useImperativeHandle } from "react";
import AudioPlayer from "./Audio.interface";

interface AudioProps {
  onCanPlay: () => void;
}

const Audio = forwardRef<AudioPlayer, AudioProps>((props, ref) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      play,
      stop,
    };
  });

  const play = () => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.currentTime = 3;
    audioRef.current.volume = 1;
    audioRef.current.play();
  };

  const stop = () => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <audio
      ref={audioRef}
      preload="auto"
      data-testid="audio"
      onCanPlay={() => {
        //console.log("On can play triggered");
        props.onCanPlay();
      }}
    >
      <source src="http://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
      <source src="http://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
    </audio>
  );
});

export default Audio;
