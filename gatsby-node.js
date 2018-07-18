'use strict';

const { resolve } = require('path');

const { createFilePath } = require('gatsby-source-filesystem');
const { kebabCase } = require('lodash');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const { relativeDirectory, modifiedTime } = getNode(node.parent);

    if (relativeDirectory.includes('/blog/')) {
      const { category } = node.frontmatter;

      // `/2013-08-05-hello-world/` → `2013-08-05-hello-world`
      const folderName = createFilePath({
        node,
        getNode,
        basePath: 'pages/blog/',
        trailingSlash: false,
      }).replace('/', '');

      createNodeField({
        node,
        name: 'slug',
        value: `/blog/${kebabCase(category)}/${folderName}/`,
      });

      createNodeField({
        node,
        name: 'dateModified',
        value: modifiedTime,
      });
    }
  }
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              tags
            }
          }
        }
      }
    }
  `);

  let categories = [];
  let tags = [];

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    categories = categories.concat(node.frontmatter.category);
    tags = tags.concat(node.frontmatter.tags);

    if (slug.includes('/blog/')) {
      createPage({
        path: slug,
        component: resolve('./src/templates/blog.js'),
        context: { slug },
      });
    }
  });

  [...new Set(categories)].forEach(category => {
    createPage({
      path: `/blog/${kebabCase(category)}/`,
      component: resolve('./src/templates/categories.js'),
      context: { category },
    });
  });

  [...new Set(tags)].forEach(tag => {
    createPage({
      path: `/blog/tags/${kebabCase(tag)}/`,
      component: resolve('./src/templates/tags.js'),
      context: { tag },
    });
  });
};
