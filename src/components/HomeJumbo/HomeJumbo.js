import React from 'react';
import './styles.css';

import logo from '../../images/LukeCSLogoTemp.jpg'

export const HomeJumbo = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="home-jumbo">
      <img id="logoPic" alt="chatter squadron logo" src={logo} />
      <iframe id="homeVideo" title="youtube-embed" src="https://www.youtube.com/embed/cdcmoyAzY88" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
  );
};