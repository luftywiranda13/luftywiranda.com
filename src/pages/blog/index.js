import React from 'react';
import { Flex, Heading } from 'rebass';
import Container from '../../components/Container';
import PostPreview from '../../components/PostPreview';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import { lineHeights } from '../../theme';

export default ({ data, location }) => (
  <Container>
    <TitleAndMetaTags title="Blog" url={location.pathname} />

    <Heading is="h1" mb={3} color="black87" lineHeight={lineHeights.compact}>
      All blog posts
    </Heading>

    <Flex flexWrap="wrap" mx={-2} pb={4}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview key={node.fields.slug} node={node} />
      ))}
    </Flex>
  </Container>
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
