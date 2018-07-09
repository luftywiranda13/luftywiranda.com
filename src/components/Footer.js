import {
  faGithubSquare,
  faInstagram,
  faSpotify,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';
import React from 'react';
import { Box, Flex, Link as L, Text as T } from 'rebass';
import siteConstants from '../site-constants';
import { colors } from '../theme';

const Wrapper = Box.extend.attrs({
  is: 'footer',
  bg: '#f9f9fa',
  py: [3, 4],
  px: 3,
  mt: 4,
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid ${colors.black12};
`;

const Text = T.extend.attrs({
  is: 'p',
  color: 'black54',
  textAlign: 'center',
  mx: 'auto',
})`
  a {
    color: ${colors.black87};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const RebassLink = L.extend.attrs({ color: 'black38', mx: 1 })`
  &:hover {
    color: ${colors.black87};
    transition: color 0.2s ease-in-out;
  }
`;

const social = [
  {
    href: `https://www.instagram.com/${siteConstants.instagramUsername}`,
    icon: (
      <FontAwesomeIcon
        icon={faInstagram}
        size="2x"
        mask={faSquare}
        transform="shrink-4"
      />
    ),
  },
  {
    href: `https://twitter.com/${siteConstants.twitterUsername}`,
    icon: <FontAwesomeIcon icon={faTwitterSquare} size="2x" />,
  },
  {
    href: `https://github.com/${siteConstants.githubUsername}`,
    icon: <FontAwesomeIcon icon={faGithubSquare} size="2x" />,
  },
  {
    href: `https://open.spotify.com/user/${siteConstants.spotifyUsername}`,
    icon: (
      <FontAwesomeIcon
        icon={faSpotify}
        size="2x"
        mask={faSquare}
        transform="shrink-5.5"
      />
    ),
  },
  {
    href: '/contact/',
    icon: <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />,
  },
];

export default () => (
  <Wrapper>
    <Text>
      &copy; {new Date().getFullYear()} {siteConstants.ownerName}
    </Text>

    <Text>
      View the source on{' '}
      <a
        href={siteConstants.siteRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </Text>

    <Flex justifyContent="center" py={3}>
      {social.map(
        x =>
          x.href.includes('https://') ? (
            <RebassLink
              key={x.href}
              href={x.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {x.icon}
            </RebassLink>
          ) : (
            <RebassLink key={x.href} is={Link} to={x.href}>
              {x.icon}
            </RebassLink>
          ),
      )}
    </Flex>

    <Text mt={3}>
      The contents of this website are licensed under{' '}
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CC-BY-4.0
      </a>
    </Text>
  </Wrapper>
);
