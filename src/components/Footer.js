import {
  faGithubSquare,
  faInstagram,
  faSpotify,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import siteConstants from '../site-constants';
import { colors } from '../theme';
import Anchor from './Anchor';
import T from './Text';

const Wrapper = Box.extend.attrs({ is: 'footer', py: 4, px: 3 })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid ${colors.darken};

  svg:hover {
    color: ${colors.primary};
  }
`;

const Text = styled(T).attrs({
  color: 'black54',
  fontSize: 1,
  textAlign: 'center',
  mx: 'auto',
})``;

const social = [
  {
    href: `https://www.instagram.com/${siteConstants.instagramUsername}`,
    icon: (
      <FontAwesomeIcon
        icon={faInstagram}
        size="2x"
        color={colors.black38}
        mask={faSquare}
        transform="shrink-4"
      />
    ),
  },
  {
    href: `https://twitter.com/${siteConstants.twitterUsername}`,
    icon: (
      <FontAwesomeIcon
        icon={faTwitterSquare}
        size="2x"
        color={colors.black38}
      />
    ),
  },
  {
    href: `https://github.com/${siteConstants.githubUsername}`,
    icon: (
      <FontAwesomeIcon icon={faGithubSquare} size="2x" color={colors.black38} />
    ),
  },
  {
    href: `https://open.spotify.com/user/${siteConstants.spotifyUsername}`,
    icon: (
      <FontAwesomeIcon
        icon={faSpotify}
        size="2x"
        color={colors.black38}
        mask={faSquare}
        transform="shrink-5.5"
      />
    ),
  },
  {
    href: '/contact/',
    icon: (
      <FontAwesomeIcon
        icon={faEnvelopeSquare}
        size="2x"
        color={colors.black38}
      />
    ),
  },
];

export default () => (
  <Wrapper>
    <Text mb={0}>
      &copy; {new Date().getFullYear()} {siteConstants.ownerName}
    </Text>

    <Text>
      View the source on{' '}
      <Anchor to={siteConstants.siteRepo} primary="true">
        GitHub
      </Anchor>
    </Text>

    <Flex justifyContent="center" mb={3}>
      {social.map(x => (
        <Anchor key={x.href} to={x.href} mx={1}>
          {x.icon}
        </Anchor>
      ))}
    </Flex>

    <Text mb={0}>
      Contents are available under{' '}
      <Anchor to="https://creativecommons.org/licenses/by/4.0/" primary="true">
        CC-BY-4.0
      </Anchor>
    </Text>
  </Wrapper>
);
