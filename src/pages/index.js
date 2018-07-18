import Img from 'gatsby-image';
import React from 'react';
import Scrollchor from 'react-scrollchor';
import { Avatar, Box, Button as B, Flex } from 'rebass';
import Anchor from '../components/Anchor';
import Container from '../components/Container';
import GithubRepo from '../components/GithubRepo';
import Heading from '../components/Heading';
import Lead from '../components/Lead';
import PostPreview from '../components/PostPreview';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import siteConstants from '../site-constants';
import { colors } from '../theme';

const Button = B.extend.attrs({
  m: 1,
  mr: [-1, 1],
  lineHeight: 'loose',
})`
  flex: 1;
  box-shadow: inset 0 0 0 2px ${colors.primary};

  &:focus {
    box-shadow: 0 0 0 2px ${colors.black38};
  }

  &:hover {
    ${p =>
      p.bg === 'primary'
        ? `
      background-color: transparent;
      color: ${colors.primary};
    `
        : `
      background-color: ${colors.primary};
      color: ${colors.white};
    `};

    transition: background 0.2s ease-in-out;
  }
`;

export default ({ data, location }) => {
  const { allGithubRepositories, allMarkdownRemark, file } = data;

  return (
    <Container>
      <TitleAndMetaTags url={location.pathname} />

      <Box is="section" width={[1, 1, '62%']} mb={6}>
        <Avatar
          is={Img}
          resolutions={file.childImageSharp.resolutions}
          alt="Lufty Wiranda"
          mb={3}
          style={{ border: `1px solid ${colors.black12}` }}
        />

        <Heading is="h1">
          A software developer who lives in Bandung, Indonesia.
        </Heading>

        <Lead>
          Programming is my routine and my hobby. Iʼve worked on important
          projects with companies, government, and also brilliant people.
        </Lead>

        <Flex
          flexDirection={['column', 'row']}
          flexWrap="wrap"
          m={-1}
          width={[1, 1 / 2]}
        >
          <Button
            is={Scrollchor}
            to="#blog"
            animate={{ offset: -77, duration: 200 }}
            disableHistory
            bg="transparent"
            color="primary"
          >
            Read blog
          </Button>
          <Button is={Anchor} to="/contact/" bg="primary">
            Contact
          </Button>
        </Flex>
      </Box>

      <Box id="blog" is="section" mb={6}>
        <Heading is="h2" fontSize={4}>
          Latest posts
        </Heading>

        <Flex flexWrap="wrap" m={-2}>
          {allMarkdownRemark.edges.map(({ node }) => (
            <PostPreview key={node.fields.slug} node={node} />
          ))}
        </Flex>
      </Box>

      <Box is="section" mb={6}>
        <Heading is="h2" fontSize={4}>
          Open source
        </Heading>

        <Flex flexWrap="wrap" m={-2}>
          {allGithubRepositories.edges.map(({ node }) => (
            <GithubRepo key={node.url} node={node} />
          ))}

          <Anchor
            primary="true"
            to={`https://github.com/${
              siteConstants.githubUsername
            }?tab=repositories`}
            ml="auto"
            mr={2}
            mt={2}
          >
            More on GitHub &raquo;
          </Anchor>
        </Flex>
      </Box>
    </Container>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allGithubRepositories {
      edges {
        ...GithubRepoFragment
      }
    }
    allMarkdownRemark(
      filter: { id: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        ...PostPreviewFragment
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
