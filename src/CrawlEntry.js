import React from "react";

import data from "./data.json";
import Audio from "./Audio";
import Crawl from "./Crawl";

class CrawlEntry extends React.PureComponent {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.onClick = this.onClick.bind(this);
    this.onDone = this.onDone.bind(this);
    this.state = {
      playing: false
    };
  }

  render() {
    const {
      match: { params }
    } = this.props;
    let { id } = params;
    id = id || "test";
    const crawlData = data[id] || data.test;
    const text = crawlData.text.split("\n");
    const getKey = () => {
      return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5);
    };
    return (
      <div>
        <Audio ref={this.audioRef} />
        {this.renderPlaying(crawlData, text, getKey)}
      </div>
    );
  }

  renderPlaying(crawlData, text, getKey) {
    if (!this.state.playing) {
      return <button onClick={this.onClick}>Start</button>;
    }
    return (
      <Crawl
        episodeNumberText={crawlData.episodeNumberText}
        episodeTitle={crawlData.episodeTitle}
        timeout={90000}
        onEnd={this.onDone}
      >
        {text.map(child => {
          return <p key={getKey()}>{child}</p>;
        })}
      </Crawl>
    );
  }

  onClick() {
    this.audioRef.current.play();
    this.setState({
      playing: true
    });
  }

  onDone() {
    this.audioRef.current.stop();
    this.setState({
      playing: false
    });
  }
}

export default CrawlEntry;
