import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import JumboStyled from '../components/HomeJumbo';
import MoreVideos from '../components/MoreVideos';
import PodcastPlayer from '../components/PodcastPlayer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div className="row">
      <div className="col-12">
        <PodcastPlayer />
      </div>
      <div className="col-12 order-lg-first">
        <JumboStyled />
      </div>
      <div className="col-12">
        <MoreVideos />
      </div>
    </div> */}
    <div className='main-grid'>
      <JumboStyled />
      <MoreVideos />
      <PodcastPlayer />
    </div>
  </Layout>
);

export default IndexPage;
