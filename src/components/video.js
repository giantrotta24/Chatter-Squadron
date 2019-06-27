/*
video component
https://www.gatsbyjs.org/docs/working-with-video/
*/

const Video = (props) => {
    return (
      <div className='video'>
        <iframe 
          width="560" 
          height="315" 
          src={props.src}
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title={props.title}
        />
        <div className='video-title'>{props.title ? props.title : 'Video Title'}</div>
      </div>
    );
  }