/*
import react video player
create responsive video player that accepts youtube as src

style container or player-wrapper

pass in src from outside video.js

*/

import React, { Component } from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';

class VideoPlayer extends Component {
  state = {
    url: 'https://www.youtube.com/watch?v=u3py1owz5R0',
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
  };

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };
  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  stop = () => {
    this.setState({ url: null, playing: false });
  };
  onPlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };
  ref = player => {
    this.player = player;
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
      </div>
    );
  }
}

export default VideoPlayer;
