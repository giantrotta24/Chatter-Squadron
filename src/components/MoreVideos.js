import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import './index.css';

const INITIAL_QUERY = graphql`
  query initialLoadQuery {
    allYoutubeVideo(limit: 6) {
      edges {
        node {
          videoId
          title
          thumbnail {
            url
          }
        }
      }
    }
  }
`;

const Video = styled.div`
  .video {
    display: grid;
    grid-gap: 10px;
    justify-items: center;
    font-weight: 100;
    font-family: 'Raleway Light', sans-serif;
    font-size: 1.7em;
  }

  .video-thumbnail {
    height: 350px;
    width: 500px;
  }

  .video-title {
    align-self: center;
    margin-bottom: 1.45rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 500px;
  }

  .video-title:hover {
    white-space: normal;
    overflow: visible;
    color: white;
    font-weight: 400;
  }

  @media (max-width: 1100px) {
    .video-thumbnail {
      height: 300px;
      width: 450px;
    }

    .video-title {
      width: 350px;
    }
  }


  @media (max-width: 550px) {
    .video-thumbnail {
      height: 250px;
      width: 350px;
    }

    .video-title {
      width: 350px;
    }
  }
`;

const VideoListing = () => (
  <StaticQuery
    query={INITIAL_QUERY}
    render={({ allYoutubeVideo }) =>
      allYoutubeVideo.edges.map(({ node }) => (
        <Video key={node.videoId}>
          <div className="video">
            <img
              src={node.thumbnail.url}
              alt="video thumbnail"
              className="video-thumbnail"
            />
            <div className="video-title">{node.title}</div>
          </div>
        </Video>
      ))
    }
  />
);

const MoreVideos = () => (
  <div className="wrapper">
    <h2 className="more-videos-header">More Videos</h2>
    <div className="more-videos">
      <VideoListing />
    </div>
    <div className="show-more">Show More //</div>
  </div>
);

export default MoreVideos;
