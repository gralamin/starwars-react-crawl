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
    this.onLoad = this.onLoad.bind(this);
    this.state = {
      playing: false,
      loading: true
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
        <Audio ref={this.audioRef} onCanPlay={this.onLoad} />
        {this.renderPlaying(crawlData, text, getKey)}
      </div>
    );
  }

  renderPlaying(crawlData, text, getKey) {
    if (this.state.loading) {
      return (
        <div style={{ margin: "6rem" }}>
          <img
            src="https://cdn.dribbble.com/users/361263/screenshots/3051905/imperial_emblem.gif?vid=1"
            alt="loader"
            data-testid="loader"
          />
        </div>
      );
    }
    if (!this.state.playing) {
      return (
        <div style={{ margin: "6rem" }}>
          <button onClick={this.onClick}>Start</button>
        </div>
      );
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

  onLoad() {
    this.setState({
      loading: false
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
