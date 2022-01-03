import React from "react";
import PropTypes from "prop-types";

class Audio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.onCanPlay = this.onCanPlay.bind(this);
  }

  render() {
    return (
      <audio
        ref={this.audioRef}
        preload="auto"
        data-testid="audio"
        onCanPlay={this.onCanPlay}
      >
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
    this.audioRef.current.currentTime = 3;
    this.audioRef.current.volume = 1;
    this.audioRef.current.play();
  }

  stop() {
    this.audioRef.current.pause();
    this.audioRef.current.currentTime = 0;
  }

  onCanPlay() {
    this.props.onCanPlay();
  }
}

Audio.propTypes = {
  onCanPlay: PropTypes.func.isRequired
};

export default Audio;
