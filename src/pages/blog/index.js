import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import PostPreview from '../../components/PostPreview';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const BlogPage = ({ data, location }) => (
  <Container>
    <TitleAndMetaTags title="Blog" url={location.pathname} />

    <Heading is="h1" mb={4}>
      All blog posts
    </Heading>

    <Flex flexWrap="wrap" m={-2}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview key={node.fields.slug} node={node} />
      ))}
    </Flex>
  </Container>
);

BlogPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,

  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }).isRequired,
};

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      filter: { id: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        ...PostPreviewFragment
      }
    }
  }
`;
