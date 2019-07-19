import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        starfield: file(relativePath: { eq: "8k-starfield.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.starfield.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#111111`}
          fadeIn={`soft`}
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: '',
            backgroundPosition: 'hidden'
          }}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  min-height: calc(100vh - 100px);
  background-position: center;
  background-repeat: repeat-y;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export default StyledBackgroundSection;
