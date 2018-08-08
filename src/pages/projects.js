import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';

import { StyledAnchor } from '../components/Anchor';
import Container from '../components/Container';
import GithubRepo from '../components/GithubRepo';
import Heading from '../components/Heading';
import Lead from '../components/Lead';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import siteConstants from '../site-constants';
import { breakpoints, space } from '../theme';

const RwdLine = styled.span`
  @media (min-width: ${breakpoints[2]}) {
    display: block;
  }
`;

const ProjectsPage = ({ location, data }) => {
  const { allGithubRepositories } = data;

  return (
    <Container>
      <TitleAndMetaTags
        title="Projects"
        url={location.pathname}
        description="My awesome projects"
      />

      <Box is="header" mb={6}>
        <Heading is="h1">Projects</Heading>
        <Lead>
          <RwdLine>
            I’m not allowed to show all my best work on this site because of the
            agreements.{' '}
          </RwdLine>
          <RwdLine>
            <StyledAnchor to="/contact/">Contact me</StyledAnchor> if you’re
            interested to see some examples, I’ll be happy to send them to you.
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

          <StyledAnchor
            to={`https://github.com/${
              siteConstants.githubUsername
            }?tab=repositories`}
            style={{
              marginLeft: 'auto',
              marginTop: `${space[2]}px`,
              marginRight: `${space[2]}px`,
            }}
          >
            More on GitHub &raquo;
          </StyledAnchor>
        </Flex>
      </Box>
    </Container>
  );
};

ProjectsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,

  data: PropTypes.shape({
    allGithubRepositories: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProjectsPage;

export const query = graphql`
  query ProjectsPageQuery {
    allGithubRepositories {
      edges {
        ...GithubRepoFragment
      }
    }
  }
`;
