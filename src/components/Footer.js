import React from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github.cjs';
import { Instagram } from 'styled-icons/fa-brands/Instagram.cjs';
import { Spotify } from 'styled-icons/fa-brands/Spotify.cjs';
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs';
import { MailRead } from 'styled-icons/octicons/MailRead.cjs';

import siteConstants from '../site-constants';
import { colors, space } from '../theme';
import Anchor, { StyledAnchor } from './Anchor';
import T from './Text';

const Wrapper = Box.extend.attrs({
  is: 'footer',
  py: 4,
  px: 3,
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid ${colors.darken};
`;

const Text = styled(T).attrs({
  color: 'black54',
  fontSize: 1,
  textAlign: 'center',
  mx: 'auto',
})``;

const IconStyles = `
  color: ${colors.black38};

  &:hover {
    color: ${colors.primary};
  }
`;

const social = [
  {
    title: 'Instagram',
    href: `https://www.instagram.com/${siteConstants.instagramUsername}`,
    icon: <Instagram size="24" title="Instagram" css={IconStyles} />,
  },
  {
    title: 'Twitter',
    href: `https://twitter.com/${siteConstants.twitterUsername}`,
    icon: <Twitter size="24" title="Twitter" css={IconStyles} />,
  },
  {
    title: 'GitHub',
    href: `https://github.com/${siteConstants.githubUsername}`,
    icon: <Github size="24" title="GitHub" css={IconStyles} />,
  },
  {
    title: 'Spotify',
    href: `https://open.spotify.com/user/${siteConstants.spotifyUsername}`,
    icon: <Spotify size="24" title="Spotify" css={IconStyles} />,
  },
  {
    title: 'Contact',
    href: '/contact/',
    icon: <MailRead size="24" title="Contact" css={IconStyles} />,
  },
];

export default () => (
  <Wrapper>
    <Text mb={0}>
      &copy; {new Date().getFullYear()} {siteConstants.ownerName}
    </Text>

    <Text>
      View the source on{' '}
      <StyledAnchor to={siteConstants.siteRepo}>GitHub</StyledAnchor>
    </Text>

    <Flex justifyContent="center" mb={3}>
      {social.map(x => (
        <Anchor
          key={x.href}
          to={x.href}
          title={x.title}
          style={{
            marginLeft: `${space[1]}px`,
            marginRight: `${space[1]}px`,
          }}
        >
          {x.icon}
        </Anchor>
      ))}
    </Flex>

    <Text mb={0}>
      Content released under{' '}
      <StyledAnchor to="https://creativecommons.org/licenses/by/4.0/">
        CC-BY-4.0
      </StyledAnchor>
    </Text>
  </Wrapper>
);
