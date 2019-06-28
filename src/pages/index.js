import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import { HomeJumbo } from '../components/HomeJumbo/HomeJumbo';
import JumboStyled from '../components/homejumbo';
// import { MoreVideos } from '../components/MoreVideos/MoreVideos';
import MoreVideos from '../components/morevideos';
import { PodcastPlayer } from '../components/PodcastPlayer/PodcastPlayer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="col-12">
        <PodcastPlayer />
      </div>
      <div className="col-12 order-lg-first">
        <JumboStyled />
      </div>
      <div className="col-12">
        <MoreVideos />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
