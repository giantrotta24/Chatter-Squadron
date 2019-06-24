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
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      videos: [
        'https://source.unsplash.com/random/600x400',
        'https://source.unsplash.com/random/600x400',
        'https://source.unsplash.com/random/600x400',
        'https://source.unsplash.com/random/600x400',
        'https://source.unsplash.com/random/600x400',
        'https://source.unsplash.com/random/600x400',
      ],
      displayWhenCollasped: 2,
    }
  }

  toggleExpand = () => {
    console.log('toggle');
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='wrapper'>
          <h2 className='more-videos-header'>More Videos</h2>
          <div className='container more-videos'>
            {this.state.isExpanded 
              ? this.state.videos.map(v => <Video src={v} />)
              : this.state.videos.slice(0, this.state.displayWhenCollasped).map(v => <Video src={v} />)
            }
          </div>
          <div 
            className='show-more' 
            onClick={this.toggleExpand}
          >
            {!this.state.isExpanded ? 'Show More' : 'Show Less'}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// Change to embed or video or something, images are placeholders
const Video = (props) => {
  return (
    <div className='video'>
      <img
        src={props.src}
        alt='video thumbnail'
        className='video-thumbnail'
      />
      <div className='video-title'>{props.title ? this.props.title : 'Video Title'}</div>
    </div>
  );
}
