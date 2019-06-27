import React from 'react';
import '../index.css';

import logo from '../../images/ChatterSquadronLogo.png';

export const HomeJumbo = () => {
  return (
    <React.Fragment>
      <h2 className="vid-player-header">Featured Video</h2>
      <div className="jumbotron jumbotron-fluid">
        <div className="home-jumbo">
          <img id="logoPic" alt="chatter squadron logo" src={logo} />
          <iframe
            id="homeVideo"
            title="youtube-embed"
            src="https://www.youtube.com/embed/cdcmoyAzY88"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};
