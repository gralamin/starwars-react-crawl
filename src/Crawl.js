import React from "react";
import PropTypes from "prop-types";
import "./crawl.css";
import logo from "./starwarslogo.svg";

class Crawl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onEnd = this.onEnd.bind(this);
    const timer = setTimeout(() => this.onEnd(), this.props.timeout);
    this.state = {
      timer
    };
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  render() {
    return (
      <div className="star-wars-intro">
        <div className="fade" />
        <p className="intro-text">{this.props.introText}</p>

        <h2 className="main-logo">
          <img src={logo} alt="star wars logo" />
        </h2>

        <div className="main-content">
          <div className="title-content">
            <div className="content-header">{this.props.episodeNumberText}</div>
            <div className="content-header episode-title">
              {this.props.episodeTitle}
            </div>
            <div className="content-body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }

  onEnd() {
    this.props.onEnd();
  }
}

Crawl.propTypes = {
  introText: PropTypes.string,
  episodeNumberText: PropTypes.string,
  episodeTitle: PropTypes.string,
  onEnd: PropTypes.func,
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number
};

Crawl.defaultProps = {
  introText: "A long time ago in a galaxy far, far away. . . .",
  episodeNumberText: "Episode IV",
  episodeTitle: "A New Hope",
  onEnd: () => {},
  timeout: 3000
};

export default Crawl;
