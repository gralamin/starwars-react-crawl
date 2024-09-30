import "./crawl.css";
import logo from "./starwarslogo.svg";
import { useEffect, FC, ReactNode } from "react";

interface CrawlProps {
  timeout: number;
  onEnd: () => void;
  introText: string;
  episodeNumberText: string;
  episodeTitle: string;
  children?: ReactNode[];
}

const Crawl: FC<CrawlProps> = ({
  timeout,
  onEnd,
  introText = "A long time ago in a galaxy far, far away. . . .",
  episodeNumberText,
  episodeTitle,
  children,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Called timer");
      onEnd();
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onEnd]); // If timeout and onEnd change, this changes

  return (
    <div className="star-wars-intro">
      <div className="fade" />
      <p className="intro-text">{introText}</p>

      <h2 className="main-logo">
        <img src={logo} alt="star wars logo" />
      </h2>

      <div className="main-content">
        <div className="title-content">
          <div className="content-header">{episodeNumberText}</div>
          <div className="content-header episode-title">{episodeTitle}</div>
          <div className="content-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Crawl;
