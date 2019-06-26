/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Navbar } from "./Navbar/Navbar"
import { MobileBrand } from "./MobileBrand/MobileBrand"
import Footer from "./Footer"


import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <MobileBrand />
      <Navbar></Navbar>
        <main>{children}</main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
