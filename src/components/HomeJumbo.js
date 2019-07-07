import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import LogoStyled from './Logo';
import VideoPlayer from './VideoPlayer';

import BackgroundImage from 'gatsby-background-image';

import './index.css';

// import logo from '../images/ChatterSquadronLogo.png';

const HomeJumbo = () => (
  <StaticQuery
    query={graphql`
      query {
        smokeField: file(relativePath: { eq: "CS_smokeBG1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      let imageData = data.smokeField.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={'jumbo'}
          fluid={imageData}
          backgroundColor={`hsla(0, 0%, 7%, 0.8)`}
          fadeIn={`soft`}
        >
          <h2 className="vid-player-header">Featured Video</h2>
          <div className="jumbotron jumbotron-fluid">
            <div className="home-jumbo">
              <LogoStyled />
              <div>
                <VideoPlayer />
              </div>
              {/* <iframe
                id="homeVideo"
                title="youtube-embed"
                src="https://www.youtube.com/embed/cdcmoyAzY88"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

const JumboStyled = styled(HomeJumbo)`
  background-size: cover;
  background-position: center;
`;

export default JumboStyled;
