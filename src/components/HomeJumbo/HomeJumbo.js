import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import '../index.css';

import logo from '../../images/ChatterSquadronLogo.png';

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
      const imageData = data.smokeField.childImageSharp.fluid;
      return (
        <React.Fragment>
          <h2 className="vid-player-header">Featured Video</h2>
          <div className="jumbotron jumbotron-fluid">
            <div className="home-jumbo">
              <img id="logoPic" alt="chatter squadron logo" src={logo} />
              <iframe
                id="homeVideo"
                title="youtube-embed"
                src="https://www.youtube.com/embed/cdcmoyAzY88"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </React.Fragment>
      );
    }}
  />
);

const jumboStyled = styled(HomeJumbo)`
  background-image: url('../images/CS_smokeBG1.jpg');
  background-size: cover;
  background-position: center;
`;

export default jumboStyled
