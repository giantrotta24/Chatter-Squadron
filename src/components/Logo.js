import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import './index.css';

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        csLogo: file(relativePath: { eq: "ChatterSquadronLogo.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      let imageData = data.csLogo.childImageSharp.fluid;
      return (
        <div id="logoPic">
          <Img fluid={imageData} alt="chatter squadron logo" />
        </div>
      );
    }}
  />
);

const LogoStyled = styled(Logo)`
  #logoPic {
    height: 300px;
    width: 400px;
    border-radius: 25px;
  }
`;

export default LogoStyled;
