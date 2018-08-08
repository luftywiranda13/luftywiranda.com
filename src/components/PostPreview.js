import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const PostPreview = ({ node }) => (
  <Card
    key={node.fields.slug}
    title={node.frontmatter.title}
    category={node.frontmatter.category}
    description={node.excerpt}
    thumbnail={node.frontmatter.thumbnail.childImageSharp.sizes}
    link={node.fields.slug}
  />
);

PostPreview.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          sizes: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,

    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,

    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;

export const query = graphql`
  fragment PostPreviewFragment on MarkdownRemarkEdge {
    node {
      fields {
        slug
      }
      frontmatter {
        title
        category
        thumbnail {
          childImageSharp {
            sizes(quality: 85) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
      excerpt
    }
  }
`;
