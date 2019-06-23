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
    <MoreVideos />
    <PodcastPlayer />
  </Layout>
)

export default IndexPage
