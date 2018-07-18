import React from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import Anchor from '../components/Anchor';
import Container from '../components/Container';
import GithubRepo from '../components/GithubRepo';
import Heading from '../components/Heading';
import Lead from '../components/Lead';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import siteConstants from '../site-constants';
import { breakpoints } from '../theme';

const RwdLine = styled.span`
  @media (min-width: ${breakpoints[2]}) {
    display: block;
  }
`;

export default ({ location, data }) => {
  const { allGithubRepositories } = data;

  return (
    <Container>
      <TitleAndMetaTags
        title="Projects"
        url={location.pathname}
        description="My awesome projects"
      />

      <Heading is="h1">Projects</Heading>

      <Box mb={6}>
        <Lead>
          <RwdLine>
            I’m not allowed to show all my best work on this site because of the
            agreements.{' '}
          </RwdLine>
          <RwdLine>
            <Anchor to="/contact/" primary="true">
              Contact me
            </Anchor>{' '}
            if you’re interested to see some examples, I’ll be happy to send
            them to you.
          </RwdLine>
        </Lead>
      </Box>

      <Box is="section" mb={6}>
        <Heading is="h2" fontSize={4}>
          Commercial
        </Heading>

        <Lead color="black54">To be listed …</Lead>
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
  query ProjectsPageQuery {
    allGithubRepositories {
      edges {
        ...GithubRepoFragment
      }
    }
  }
`;
