'use strict';

require('dotenv').config();

const siteConstants = require('./src/site-constants');

module.exports = {
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-lodash',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteConstants.siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: siteConstants.gaTrackingId,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#001F3F',
        theme_color: '#001F3F',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png',
        name: siteConstants.siteTitle,
        short_name: siteConstants.siteTitleAlt,
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
            user(login: "${siteConstants.githubUsername}") {
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
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
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
    description: siteConstants.siteDescription,
    siteUrl: siteConstants.siteUrl,
    title: siteConstants.siteTitle,
  },
};
