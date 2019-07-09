/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledBackground from './StyledBackground';
import Navbar from './Navbar';
import MobileBrand from './MobileBrand';
import Footer from './Footer';

import './layout.css';
import './index.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <MobileBrand />
      <Navbar></Navbar>
      <StyledBackground>
        <main>{children}</main>
      </StyledBackground>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
