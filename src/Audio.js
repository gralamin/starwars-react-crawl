import React from "react";

class Audio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  render() {
    return (
      <audio ref={this.audioRef} preload="auto" data-testid="audio">
        <source
          src="http://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg"
          type="audio/ogg"
        />
        <source
          src="http://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3"
          type="audio/mpeg"
        />
      </audio>
    );
  }

  play() {
    this.audioRef.current.play();
    this.audioRef.current.volume = 1;
  }

  stop() {
    this.audioRef.current.pause();
    this.audioRef.current.currentTime = 0;
  }
}

export default Audio;
