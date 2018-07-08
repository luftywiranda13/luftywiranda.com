import Img from 'gatsby-image';
import Link from 'gatsby-link';
import React, { Fragment } from 'react';
import Scrollchor from 'react-scrollchor';
import {
  Avatar as A,
  Box,
  Button as B,
  Card as C,
  Container,
  Flex,
  Heading,
  Lead,
  Small,
  Subhead,
  Text,
} from 'rebass';
import PostPreview from '../components/PostPreview';
import { colors, lineHeights } from '../theme';

const Avatar = A.extend.attrs({ mb: 3 })`
  border: 1px solid ${colors.black12};
`;

const Button = B.extend.attrs({
  borderRadius: 1,
  ml: 1,
  mt: 1,
  mb: 1,
  mr: [-1, 1],
})`
  flex: 1;
  box-shadow: inset 0 0 0 2px ${colors.black87};
  line-height: ${lineHeights.loose};

  &:focus {
    box-shadow: 0 0 0 2px ${colors.black38};
  }

  &:hover {
    ${p =>
      p.bg === 'black87'
        ? `
      background: transparent;
      color: ${colors.black87};
    `
        : `
      background: ${colors.black87};
      color: ${colors.white};
    `};

    transition: background 0.2s ease-in-out;
  }
`;

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

const IndexPage = ({ data }) => (
  <Fragment>
    <Container>
      <Box is="section" pt={4} pb={5} w={[1, 1, '62%']}>
        <Avatar
          is={Img}
          resolutions={data.file.childImageSharp.resolutions}
          alt="Lufty Wiranda"
        />

        <Heading is="h1" mb={3}>
          A software developer who lives in Bandung, Indonesia.
        </Heading>

        <Lead is="p">
          Programming is a hobby but I take it seriously. Iʼve worked on amazing
          projects with companies, government, and also brilliant people.
        </Lead>

        <Flex
          flexDirection={['column', 'row']}
          flexWrap="wrap"
          m={-1}
          w={[1, 1 / 2]}
        >
          <Button
            is={Scrollchor}
            to="#blog"
            animate={{ offset: -32, duration: 200 }}
            bg="transparent"
            color="black87"
          >
            Read blog
          </Button>
          <Button is={Link} to="/contact" bg="black87">
            Contact
          </Button>
        </Flex>
      </Box>

      <Box id="blog" is="section" py={5}>
        <Heading fontSize={4} mb={2}>
          Latest posts
        </Heading>

        <Flex flexWrap="wrap" mx={-2}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostPreview key={node.fields.slug} node={node} />
          ))}
        </Flex>
      </Box>

      <Box is="section" py={5}>
        <Heading fontSize={4} mb={2}>
          Open-source
        </Heading>

        <Flex flexWrap="wrap" mx={-2}>
          {data.allGithubRepositories.edges.map(({ node }) => (
            <Box key={node.url} is="article" p={2} w={[1, 1 / 3]}>
              <a
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Card p={3}>
                  <Subhead fontSize={3} color="black87">
                    {node.name}
                  </Subhead>
                  <Small fontSize={1} color="black54">
                    {node.primaryLanguage.name}
                  </Small>

                  <Text is="p" mt={3} color="black87">
                    {node.description}
                  </Text>
                </Card>
              </a>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  </Fragment>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allGithubRepositories {
      edges {
        node {
          name
          description
          url
          primaryLanguage {
            name
          }
        }
      }
    }
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
    file(relativePath: { eq: "assets/avatar.jpg" }) {
      childImageSharp {
        resolutions(width: 96, height: 96, quality: 85) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
  }
`;
