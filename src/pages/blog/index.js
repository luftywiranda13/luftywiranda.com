import Link from 'gatsby-link';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  BackgroundImage,
  Box,
  Card as C,
  Container,
  Flex,
  Small,
  Subhead,
  Text,
} from 'rebass';

const Card = C.extend`
  min-height: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 1px;

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
    h3 {
      text-decoration: underline;
    }
  }
`;

const Thumbnail = BackgroundImage.extend.attrs({ ratio: 9 / 16 })`
  border-radius: 1px;

  ${Card}:hover & {
    opacity: 0.8;
  }
`;

export default ({ data }) => (
  <Fragment>
    <Helmet defer={false} title="Blog" />

    <Container>
      <Flex flexWrap="wrap" mx={-2} py={4}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Box key={node.fields.slug} is="article" p={2} w={[1, 1 / 3]}>
            <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
              <Card p={0}>
                <Thumbnail
                  is="img"
                  src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
                />

                <Box p={3}>
                  <Subhead fontSize={3} color="black87">
                    {node.frontmatter.title}
                  </Subhead>
                  <Small fontSize={1} color="black54">
                    {node.fields.date}
                  </Small>

                  <Text is="p" mt={3} color="black87">
                    {node.excerpt}
                  </Text>
                </Box>
              </Card>
            </Link>
          </Box>
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
          }
          excerpt
        }
      }
    }
  }
`;
