import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Flex, Heading } from 'rebass';
import PostPreview from '../components/PostPreview';

export default ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { totalCount } = data.allMarkdownRemark;

  return (
    <Fragment>
      <Helmet defer={false} title={tag} />

      <Container py={4}>
        <Heading is="h1" mb={3}>
          {totalCount} {totalCount >= 2 ? 'posts' : 'post'} tagged with “{tag}”
        </Heading>

        <Flex flexWrap="wrap" mx={-2} pb={4}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostPreview key={node.fields.slug} node={node} />
          ))}
        </Flex>
      </Container>
    </Fragment>
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
          }
          excerpt
        }
      }
    }
  }
`;