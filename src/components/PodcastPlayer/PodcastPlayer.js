import React from 'react';

export const PodcastPlayer = (props) => {
  return (
    // Two possible podcast embeds 
    <div className='container my-4'>
      <iframe 
        style={{border: 'none'}} 
        title="libsyn player"
        src="//html5-player.libsyn.com/embed/episode/id/10159973/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/" 
        height="90" 
        width="100%" 
        scrolling="no"  
        allowfullscreen 
        webkitallowfullscreen 
        mozallowfullscreen 
        oallowfullscreen 
        msallowfullscreen
      />
      {/* <iframe src="https://open.spotify.com/embed-podcast/episode/65mMmsN1KC9dx8MfJrWG4o" title="spotify player" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
    </div>
    );
};
