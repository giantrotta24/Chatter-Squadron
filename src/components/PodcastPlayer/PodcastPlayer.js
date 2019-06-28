import React from 'react';

export const PodcastPlayer = props => {
  return (
    // Two possible podcast embeds
    <div className="wrapper-pod">
      <h2 className="podcast-header">The Podcast</h2>
      <div className="container my-4">
        <iframe
          id="podcast-player"
          style={{ border: 'none' }}
          title="libsyn player"
          src="//html5-player.libsyn.com/embed/destination/id/602649/height/360/theme/custom/thumbnail/yes/direction/backward/no-cache/true/render-playlist/yes/custom-color/ffffff/"
          height="360"
          width="100%"
          scrolling="yes"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          oallowfullscreen="true"
          msallowfullscreen="true"
        />
      </div>
    </div>
  );
};
