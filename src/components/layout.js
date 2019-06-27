/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledBackground from './StyledBackground';
import { Navbar } from './Navbar/Navbar';
import { MobileBrand } from './MobileBrand/MobileBrand';
import Footer from './footer';

import './layout.css';
import './index.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <StyledBackground>
        <MobileBrand />
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer />
      </StyledBackground>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
