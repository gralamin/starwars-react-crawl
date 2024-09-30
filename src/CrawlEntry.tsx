import Audio from "./Audio";
import Crawl from "./Crawl";
import "./entry.css";
import imperialLoader from "./imperial_loader.gif";
import { useState, useRef, FC } from "react";
import { CrawlData } from "./CrawlData";
import AudioPlayer from "./Audio.interface";

interface CrawlEntryProps {
  crawlData: CrawlData;
}

const CrawlEntry: FC<CrawlEntryProps> = ({ crawlData }) => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<AudioPlayer | null>(null);

  const onClick = () => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.play();
    setPlaying(true);
  };

  const onLoad = () => {
    console.log("On Load called");
    setTimeout(() => {
        console.log("On Load timer expired");
        setLoading(false);
    }, 1000);
  };

  const onDone = () => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.stop();
    setPlaying(false);
  };

  const renderPlaying = () => {
    if (loading) {
      return (
        <>
          <img src={imperialLoader} alt="loader" data-testid="loader" width="400px" />
          <div style={{ margin: "6rem" }}>
            Loader image from <a href="https://dribbble.com/shots/3051905-Imperial-Loading-Animation">Dripple</a>
          </div>
        </>
      );
    }
    if (!playing) {
      return (
        <div style={{ margin: "6rem" }}>
          <button onClick={onClick}>Start</button>
        </div>
      );
    }
    return (
      <Crawl
        episodeNumberText={crawlData.episodeNumberText}
        episodeTitle={crawlData.episodeTitle}
        introText="A long time ago in a galaxy far, far away. . . ."
        timeout={90000}
        onEnd={onDone}
      >
        {crawlData.text.split("\n").map((child, index) => {
          return <p key={index}>{child}</p>;
        })}
      </Crawl>
    );
  };

  return (
    <div>
      <Audio ref={audioRef} onCanPlay={onLoad} />
      {renderPlaying()}
    </div>
  );
};

export default CrawlEntry;
