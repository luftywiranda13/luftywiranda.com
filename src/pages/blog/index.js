import React, { Fragment } from 'react';
import { Container, Flex } from 'rebass';
import PostPreview from '../../components/PostPreview';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

export default ({ data }) => (
  <Fragment>
    <TitleAndMetaTags title="Blog" />

    <Container>
      <Flex flexWrap="wrap" mx={-2} py={4}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostPreview key={node.fields.slug} node={node} />
        ))}
      </Flex>
    </Container>
  </Fragment>
);

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      filter: { id: { regex: "/blog/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          frontmatter {
            title
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
    }
  }
`;
