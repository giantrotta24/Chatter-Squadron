import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeJumbo } from '../components/HomeJumbo/HomeJumbo';
import { MoreVideos } from '../components/MoreVideos/MoreVideos';
import { PodcastPlayer } from '../components/PodcastPlayer/PodcastPlayer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeJumbo />
    <div className="row">
      <div className="col-12">
        <PodcastPlayer />
      </div>
      <div className="col-12 order-lg-first">
        <MoreVideos />
      </div>
    </div>
  </Layout>
)

export default IndexPage
