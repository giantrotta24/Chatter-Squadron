import React from 'react';
import './styles.css';

export const HomeJumbo = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <img id="logoPic" alt="chatter squadron logo" src="https://scontent.fosu1-1.fna.fbcdn.net/v/t1.0-9/60863017_1105744352958124_4856291617184677888_n.jpg?_nc_cat=108&_nc_oc=AQmSXG9LfwNLpRUP3MgyqU7MxsjOgKGdEqjZqPLAbPMIlkc2vc7-XkyTAA2tgWXsXgQ&_nc_ht=scontent.fosu1-1.fna&oh=7d7b8c956a09adc76fc780a1fd1975de&oe=5D87F4CD" />
      <iframe id="homeVideo" title="youtube-embed" width="611" height="400" src="https://www.youtube.com/embed/cdcmoyAzY88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
  );
};