import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import { defaultStyle, transitionStyles } from '../transitions';
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

  @media (max-width: 992px) {
  }

  @media (max-width: 550px) {
    .video-thumbnail {
      width: 400px;
      height: 325px;
    }

    .video-title {
      width: 100%;
      font-size: 0.6em;
    }
  }

  @media (max-width: 445px) {
    .video-thumbnail {
      width: 300px;
      height: 225px;
    }

    .video-title {
      width: 100%;
    }
  }
`;

const LoadingIcon = styled.div`
  margin-top: 3rem;
  text-align: center;
  grid-column: 1 / -1;

  @media (max-width: 992px) {
    grid-column: auto;
    grid-row: 1 / -1;
    margin: auto;
    display: flex;

    i {
      margin: auto;
      margin-right: 5rem;
    }
  }
`;

class MoreVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      videos: [],
      hasMore: true,
      showMore: false,
      nextPageToken: '',
    };
  }

  componentDidMount() {
    this.onLoadFetch();
    if (typeof window !== 'undefined') {
      this.debounceEvent();
    }
  }

  debounceEvent = () => {
    // Binds our scroll event handler
    console.log('debounce scroll');
    window.onscroll = debounce(() => {
      const {
        state: { error, loading, hasMore },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || loading || !hasMore) return;

      // Checks that the container has been scrolled to the bottom
      if (
        window.innerHeight +
          (document.documentElement.scrollTop || document.body.scrollTop) ===
          (document.documentElement.offsetHeight || document.body.scrollTop) &&
        this.state.showMore
      ) {
        this.nextPage(this.state.nextPageToken);
      }
    }, 100);
  };

  onLoadFetch = () => {
    // Loads initial 6 videos
    let API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=6&playlistId=UUq3EOOv6Kk62OyJpjwKzH-g&key=${process.env.GATSBY_YOUTUBE_API_KEY}`;
    this.setState({ loading: true }, () => {
      axios
        .get(API_URL)
        .then(data => {
          this.setState({
            loading: false,
            videos: data.data.items,
          });
        })
        .catch(error => {
          this.setState({ loading: false, error });
        });
    });
  };

  nextPage = token => {
    if (this.state.hasMore) {
      this.nextFetch(token);
    }
  };

  nextFetch = token => {
    let API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&pageToken=${token}&playlistId=UUq3EOOv6Kk62OyJpjwKzH-g&key=${process.env.GATSBY_YOUTUBE_API_KEY}`;
    let nextVideos = [];
    this.setState({ loading: true }, () => {
      axios
        .get(API_URL)
        .then(data => {
          // Merges the next videos into our existing videos
          nextVideos = data.data.items;
          this.setState({
            loading: false,
            videos: [...this.state.videos, ...nextVideos],
          });

          if (data.data.nextPageToken) {
            this.setState({ nextPageToken: data.data.nextPageToken });
          } else {
            this.setState({ hasMore: false });
          }
        })
        .catch(error => {
          this.setState({ loading: false, error });
        });
    });
  };

  fetchYoutubeData = () => {
    let API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=UUq3EOOv6Kk62OyJpjwKzH-g&key=${process.env.GATSBY_YOUTUBE_API_KEY}`;
    let nextVideos = [];
    this.setState({ loading: true }, () => {
      axios
        .get(API_URL)
        .then(data => {
          // Merges the next videos into our existing videos
          nextVideos = data.data.items;
          this.setState({
            loading: false,
            videos: nextVideos,
          });

          if (data.data.nextPageToken) {
            this.setState({
              nextPageToken: data.data.nextPageToken,
              hasMore: true,
            });
          } else {
            this.setState({ hasMore: false });
          }
        })
        .catch(error => {
          this.setState({ loading: false, error });
        });
    });
  };

  grabId = id => {
    this.props.callbackFromParent(id);
  };

  showMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
    if (this.state.showMore === false) {
      this.fetchYoutubeData();
    }
  };

  render() {
    const videos = this.state.showMore
      ? this.state.videos
      : this.state.videos.slice(0, 6);

    return (
      <div className='wrapper'>
        <h2 className='more-videos-header'>More Videos</h2>
        <div className='more-videos'>
          {videos.map(video => (
            <Transition in appear={true} timeout={300}>
              {state => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  <Video key={video.contentDetails.videoId}>
                    <div className='video'>
                      <img
                        src={video.snippet.thumbnails.high.url}
                        alt='video thumbnail'
                        className='video-thumbnail'
                      />
                      <div
                        className='video-title'
                        onClick={() =>
                          this.grabId(video.contentDetails.videoId)
                        }
                      >
                        {video.snippet.title}
                      </div>
                    </div>
                  </Video>
                </div>
              )}
            </Transition>
          ))}
          {this.state.error && <div>{this.state.error}</div>}
          {this.state.loading && (
            <LoadingIcon>
              <i className='fas fa-5x fa-spinner fa-pulse' />
            </LoadingIcon>
          )}
        </div>
        <div className='show-more' onClick={() => this.showMore()}>
          {!this.state.showMore ? 'Show More' : 'Show Less'}
        </div>
      </div>
    );
  }
}

export default MoreVideos;
