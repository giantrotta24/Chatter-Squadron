import React, { Component } from 'react';
// import Link from 'gatsby';
import './styles.css';

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

// TODO Call YouTube api to get the latest videos from channel; if they hit show more maybe get more videos
// TODO Fix issue where videos overlap each other from 1200px until mobile collapse
export class MoreVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      videos: [
        {
          link: 'https://www.youtube.com/embed/a6v8ZPkBVRs',
          title: 'Title'
        },
        {
          link: 'https://www.youtube.com/embed/cdcmoyAzY88',
          title: 'Another title'
        },
        {
          link: 'https://www.youtube.com/embed/M0QxHPuPBrE',
          title: 'More title stuff'
        },
        {
          link: 'https://www.youtube.com/embed/u0eEouNEtV0',
          title: 'Yet another title'
        },
        {
          link: 'https://www.youtube.com/embed/P0vg6RF4xxs',
          title: 'Title 2.123.01'
        },
        {
          link: 'https://www.youtube.com/embed/tUffUqNJA3k',
          title: 'Best title of all time for real it is great'
        },
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
              ? this.state.videos.map(v => <Video src={v.link} title={v.title} key={v.link} />)
              : this.state.videos.slice(0, this.state.displayWhenCollasped).map(v => <Video src={v.link} title={v.title} key={v.link} />)
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

// TODO Move this to its own component folder
const Video = (props) => {
  return (
    <div className='video'>
      <iframe 
        width="560" 
        height="315" 
        src={props.src}
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        title={props.title}
      />
      <div className='video-title'>{props.title ? props.title : 'Video Title'}</div>
    </div>
  );
}
