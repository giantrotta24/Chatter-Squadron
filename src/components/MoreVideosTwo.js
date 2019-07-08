import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import './index.css';

const Video = styled.div`
  .video {
    display: grid;
    grid-gap: 10px;
    justify-items: center;
    font-weight: 100;
    font-family: 'Raleway Light', sans-serif;
    font-size: 1.5em;
    background-color: #111111;
    border: 1px solid black;
    -webkit-box-shadow: 4px 6px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 6px 5px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 6px 5px -2px rgba(0, 0, 0, 0.75);

    position: relative;
  }

  .video-thumbnail {
    height: 350px;
    width: 500px;
  }

  .video-title {
    align-self: center;
    padding: 0.25em 1em 0.5em 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 500px;

    border-top: 2px solid var(--yellow);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #111111;
    width: 100%;
  }

  .video-title:hover {
    max-height: 100%;
    background-color: rgba(17, 17, 17, 0.85);
    white-space: normal;
    overflow: visible;
    color: white;
    font-weight: 400;
    cursor: pointer;
  }

  @media (max-width: 650px) {
  }

  @media (max-width: 525px) {
    .video-thumbnail {
      width: 300px;
      height: 225px;
    }

    .video-title {
      width: 300px;
    }
  }

  @media (max-width: 445px) {
    .video-thumbnail {
      width: 260px;
      height: 155px;
    }

    .video-title {
      width: 260px;
    }
  }
`;

class VideoListing extends Component {
  state = {
    videoID: '',
    videoThumbnail: '',
    videoTitle: '',
    loading: false,
    error: false,
  };

  componentDidMount() {}
}

fetchYoutubeData = () => {
  this.setState({ loading: true });
  axios
  .get(`youtube api`)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    this.setState({ loading: false, error })
  })
};

// const VideoListing = () => (
//   <StaticQuery
//     query={INITIAL_QUERY}
//     render={({ allYoutubeVideo }) =>
//       allYoutubeVideo.edges.map(({ node }) => (
//         <Video key={node.videoId}>
//           <div className="video">
//             <img
//               src={node.thumbnail.url}
//               alt="video thumbnail"
//               className="video-thumbnail"
//             />
//             <div className="video-title">{node.title}</div>
//           </div>
//         </Video>
//       ))
//     }
//   />
// );

const MoreVideosTwo = () => (
  <div className="wrapper">
    <h2 className="more-videos-header">More Videos</h2>
    <div className="more-videos">
      <VideoListing />
    </div>
    <div className="show-more">Show More //</div>
  </div>
);

export default MoreVideosTwo;
