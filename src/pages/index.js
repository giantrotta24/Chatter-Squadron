import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeJumbo } from '../components/HomeJumbo/HomeJumbo';
import { PodcastPlayer } from '../components/PodcastPlayer/PodcastPlayer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <HomeJumbo /> */}
    <PodcastPlayer />
  </Layout>
)

export default IndexPage
