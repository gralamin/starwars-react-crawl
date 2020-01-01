import React from "react";

import data from "./data.json";
import Audio from "./Audio";
import Crawl from "./Crawl";
import "./entry.css";
import imperialLoader from "./imperial_loader.gif";

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
        <React.Fragment>
          <img
            src={imperialLoader}
            alt="loader"
            data-testid="loader"
            width="400px"
          />
          <div style={{ margin: "6rem" }}>
            Loader image from{" "}
            <a href="https://dribbble.com/shots/3051905-Imperial-Loading-Animation">
              Dripple
            </a>
          </div>
        </React.Fragment>
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
    setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      1000
    );
  }

  onDone() {
    this.audioRef.current.stop();
    this.setState({
      playing: false
    });
  }
}

export default CrawlEntry;
