import React from 'react';
import Card from './Card';

export default ({ node }) => (
  <Card
    key={node.fields.slug}
    title={node.frontmatter.title}
    category={node.frontmatter.category}
    description={node.excerpt}
    thumbnail={node.frontmatter.thumbnail.childImageSharp.sizes}
    link={node.fields.slug}
  />
);

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
