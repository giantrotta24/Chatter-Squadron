const path = require('path');
let env = process.env.NODE_ENV || 'development'
require('dotenv').config({path: `./.env.${env}`}); 

module.exports = {
  siteMetadata: {
    title: `Chatter Squadron Hub`,
    description: `Your home for Star Wars fun & positivity.`,
    author: `Gianfranco Trotta, Dylan Thomson, Nick Yopko, Brett Bender, Matt Urian`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svg/,
          include: path.resolve(__dirname, 'src/assets/svg'),
          include: /assets(\/|\\)svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chatter-squadron-hub`,
        short_name: `chatter-hub`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/ChatterSquadronLogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCq3EOOv6Kk62OyJpjwKzH-g'],
        apiKey: `${process.env.YOUTUBE_API_KEY}`, //need this still from client, temp gian's
        maxVideos: 100 // Defaults to 50
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
