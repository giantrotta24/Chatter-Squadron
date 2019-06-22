import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {HomeJumbo} from '../components/HomeJumbo/HomeJumbo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeJumbo />
  </Layout>
)

export default IndexPage
