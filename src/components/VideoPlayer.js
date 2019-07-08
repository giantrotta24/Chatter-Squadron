/*
import react video player
create responsive video player that accepts youtube as src

style container or player-wrapper

pass in src from outside video.js

*/

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import screenfull from 'screenfull';

class VideoPlayer extends Component {
  state = {
    url: 'https://www.youtube.com/watch?v=PY9XvIA6L6s&t',
    pip: false,
    playing: false,
    controls: true,
    light: true,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    elWidth: null,
  };

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  /*

  Find video player width and hold value
  Listen for video player width to change
  On video width change, check for breakpoint value (max-width: 992px)
  If <= max-width: 992px then hide styled controls (display: none)
  Display default youtube controls
  this.state controls = true.

  componentDidMount = () => {
    this.setState({
      elWidth: findDOMNode(this.player).getBoundingClientRect().width,
    });
  };
  determineWidth = () => {

    let elWidth = findDOMNode(this.player).getBoundingClientRect().width

    if (this.state.elWidth && this.state.elWidth !== elWidth) {

      this.setState({
        elWidth: elWidth
      })

    }

  };
  determineControls = () => {

  }
  */

  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  onPlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };
  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
  };
  ref = player => {
    this.player = player;
  };
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };
  onSeekMouseDown = e => {
    this.setState({ seeking: true });
  };
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };
  onSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };
  onProgress = state => {
    console.log('onProgress', state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
    } = this.state;
    return (
      <div className="player-wrapper">
        <YouTubePlayer
          ref={this.ref}
          className="react-player"
          width="100%"
          height="100%"
          url={url}
          pip={pip}
          playing={playing}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onBuffer={() => console.log('onBuffer')}
          onEnded={this.onEnded}
          onError={e => console.log('onError', e)}
        />
        {/* <div className="video-controls">
          <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
          <button onClick={this.onClickFullscreen}>Fullscreen</button>
          <label htmlFor="volume">Volume</label>
          <input
            id="volume"
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={this.setVolume}
          />
          <label htmlFor="muted">Muted</label>
          <input
            id="muted"
            type="checkbox"
            checked={muted}
            onChange={this.toggleMuted}
          />
        </div> */}
      </div>
    );
  }
}

export default VideoPlayer;
