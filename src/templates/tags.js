import React from 'react';
import { Flex, Heading } from 'rebass';
import Container from '../components/Container';
import PostPreview from '../components/PostPreview';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { lineHeights } from '../theme';

export default ({ location, pathContext, data }) => {
  const { tag } = pathContext;
  const { totalCount } = data.allMarkdownRemark;

  return (
    <Container>
      <TitleAndMetaTags
        title={tag}
        url={location.pathname}
        description={`Posts tagged with “${tag}”`}
      />

      <Heading is="h1" mb={3} color="black87" lineHeight={lineHeights.compact}>
        {totalCount} {totalCount >= 2 ? 'posts' : 'post'} tagged with “{tag}”
      </Heading>

      <Flex flexWrap="wrap" mx={-2} pb={4}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostPreview key={node.fields.slug} node={node} />
        ))}
      </Flex>
    </Container>
  );
};

export const query = graphql`
  query TagsPage($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      totalCount
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
