import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import Container from '../components/Container';
import Heading from '../components/Heading';
import PostPreview from '../components/PostPreview';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const CategoriesTemplate = ({ location, pathContext, data }) => {
  const { category } = pathContext;
  const { totalCount } = data.allMarkdownRemark;

  return (
    <Container>
      <TitleAndMetaTags
        title={category}
        url={location.pathname}
        description={`Posts categorized as “${category}”`}
      />

      <Heading is="h1" mb={4}>
        {totalCount} {totalCount >= 2 ? 'posts' : 'post'} categorized as “
        {category}”
      </Heading>

      <Flex flexWrap="wrap" m={-2}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostPreview key={node.fields.slug} node={node} />
        ))}
      </Flex>
    </Container>
  );
};

CategoriesTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,

  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,

  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export default CategoriesTemplate;

export const query = graphql`
  query CategoriesTemplateQuery($category: String) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        ...PostPreviewFragment
      }
    }
  }
`;
