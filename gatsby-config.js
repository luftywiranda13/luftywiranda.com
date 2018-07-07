'use strict';

require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.luftywiranda.com',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-108616737-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#001F3F',
        theme_color: '#001F3F',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png',
        name: 'Lufty Wiranda',
        short_name: 'LuftyWiranda',
        start_url: '/',
      },
    },
    // This plugin should be listed right after 'gatsby-plugin-manifest'
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        },
        queries: [
          `{
            user(login: "luftywiranda13") {
              repositories(
                first: 6
                isFork: false
                privacy: PUBLIC
                orderBy: {
                  field: STARGAZERS
                  direction: DESC
                }
              ) {
                edges {
                  node {
                    name
                    description
                    url
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          }`,
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-external-links',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 690,
              showCaptions: true,
            },
          },
        ],
      },
    },
    // This plugin has to be listed as the last item in the array
    'gatsby-plugin-netlify',
  ],
  siteMetadata: {
    description: 'Personal Website of Lufty Wiranda',
    siteUrl: 'https://www.luftywiranda.com',
    title: 'Lufty Wiranda',
  },
};
