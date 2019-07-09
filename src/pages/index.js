import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import JumboStyled from '../components/HomeJumbo';
// import MoreVideos from '../components/MoreVideos';
import MoreVideos2 from '../components/MoreVideosTwo';
import PodcastPlayer from '../components/PodcastPlayer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='main-grid'>
      <JumboStyled />
      <PodcastPlayer />
      {/* <MoreVideos /> */}
      <MoreVideos2 />
    </div>
  </Layout>
);

export default IndexPage;
