import Link from 'gatsby-link';
import { kebabCase } from 'lodash';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Button, Container, Heading, Small } from 'rebass';

const Tag = Button.extend.attrs({
  mx: 1,
  bg: 'gray',
  borderRadius: 1,
  color: 'black87',
  fontSize: 0,
  fontWeight: 'normal',
})`
  &:hover {
    text-decoration: underline;
  }
`;

export default ({ data }) => {
  const { title, tags } = data.markdownRemark.frontmatter;

  return (
    <Fragment>
      <Helmet defer={false} title={title} />

      <Container>
        <Box is="article" width={[1, 2 / 3]} py={4}>
          <Heading is="h1">{title}</Heading>
          <Small fontSize={1} color="black54">
            {data.markdownRemark.fields.date}
          </Small>

          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Box>

        <Box py={4} mx={-1}>
          {tags.map(tag => (
            <Tag key={tag} is={Link} to={`/tags/${kebabCase(tag)}`}>
              {tag}
            </Tag>
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        date(formatString: "MMMM DD, YYYY")
      }
      frontmatter {
        title
        tags
      }
    }
  }
`;
