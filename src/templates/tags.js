import React from 'react';
import { Flex } from 'rebass';
import Container from '../components/Container';
import Heading from '../components/Heading';
import PostPreview from '../components/PostPreview';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

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

      <Heading is="h1" mb={4}>
        {totalCount} {totalCount >= 2 ? 'posts' : 'post'} tagged with “{tag}”
      </Heading>

      <Flex flexWrap="wrap" m={-2}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostPreview key={node.fields.slug} node={node} />
        ))}
      </Flex>
    </Container>
  );
};

export const query = graphql`
  query TagsPageQuery($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        ...PostPreviewFragment
      }
    }
  }
`;
