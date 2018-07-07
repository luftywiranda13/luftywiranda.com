import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Heading } from 'rebass';

export default ({ data }) => (
  <Fragment>
    <Helmet defer={false} title={data.markdownRemark.frontmatter.title} />

    <Container>
      <Box is="article" width={[1, 2 / 3]} py={4}>
        <Heading is="h1">{data.markdownRemark.frontmatter.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Box>
    </Container>
  </Fragment>
);

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
