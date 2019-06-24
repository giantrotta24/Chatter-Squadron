import React, { Component } from 'react';
// import Link from 'gatsby';
import './styles.css';

import '../index.css';

/*
Container to hold more videos
grid
2x3
responsive
video thumbnail
video title 
'More Videos' button adds verticle scroll
with lazy loading
*/

export class MoreVideos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <h2 className="more-videos-header">More Videos</h2>
          <div className="container more-videos">
            <div className="video">
              <img
                src="https://source.unsplash.com/random/600x400?v=1"
                alt="video thumbnail"
                className="video-thumbnail"
              />
              <div className="video-title">Video Name</div>
            </div>
            <div className="video">
              <img
                src="https://source.unsplash.com/random/600x400?v=2"
                alt="video thumbnail"
                className="video-thumbnail"
              />
              <div className="video-title">Video Name</div>
            </div>
            <div className="video">
              <img
                src="https://source.unsplash.com/random/600x400?v=3"
                alt="video thumbnail"
                className="video-thumbnail"
              />
              <div className="video-title">Video Name</div>
            </div>
            <div className="video">
              <img
                src="https://source.unsplash.com/random/600x400?v=4"
                alt="video thumbnail"
                className="video-thumbnail"
              />
              <div className="video-title">Video Name</div>
            </div>
            <div className="video">
              <img
                src="https://source.unsplash.com/random/600x400?v=5"
                alt="video thumbnail"
                className="video-thumbnail"
              />
              <div className="video-title">Video Name</div>
            </div>
            <div className="video">
              <img
                src="https://source.unsplash.com/random/600x400?v=6"
                alt="video thumbnail"
                className="video-thumbnail"
              />
              <div className="video-title">Video Name</div>
            </div>
          </div>
          <div className="show-more">Show More //</div>
        </div>
      </React.Fragment>
    );
  }
}
