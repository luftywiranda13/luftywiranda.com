'use strict';

const { resolve } = require('path');
const { kebabCase } = require('lodash');

const BLOG_POST_FILENAME_REGEX = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)\.md$/;

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const { relativePath } = getNode(node.parent);

    if (relativePath.includes('blog/')) {
      const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const filename = match[4];
      const date = new Date(Date.UTC(year, month - 1, day));

      const slug = `/blog/${year}-${month}-${day}-${filename}`;

      createNodeField({
        node,
        name: 'date',
        value: date.toJSON(),
      });

      createNodeField({
        node,
        name: 'slug',
        value: slug,
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
              tags
            }
          }
        }
      }
    }
  `);

  let tags = [];

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    tags = tags.concat(node.frontmatter.tags);

    if (slug.includes('blog/')) {
      createPage({
        path: slug,
        component: resolve('./src/templates/blog.js'),
        context: {
          slug,
        },
      });
    }
  });

  [...new Set(tags)].forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: resolve('./src/templates/tags.js'),
      context: {
        tag,
      },
    });
  });
};
