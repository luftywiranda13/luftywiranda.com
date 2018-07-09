import Link from 'gatsby-link';
import React from 'react';
import { Box, Container as C, Fixed, NavLink as N } from 'rebass';
import { css } from 'styled-components';
import { colors, lineHeights } from '../theme';

const horizontalScroll = css`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = Fixed.extend.attrs({ bg: 'white', top: 0, zIndex: 2 })`
  ${horizontalScroll};

  border-bottom: 1px solid ${colors.black12};
  width: 100%;
  opacity: 0.95;
`;

const Container = C.extend.attrs({ px: 0 })`
  display: flex;
`;

const NavLink = N.extend.attrs({ fontSize: 2, p: 3 })`
  line-height: ${lineHeights.loose};
`;

const MenuItem = NavLink.extend.attrs({
  color: 'black54',
  fontWeight: 'normal',
  px: [2, 3],
})`
  &:hover {
    color: ${colors.black87};
    box-shadow: inset 0 -2px ${colors.black87};
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export default ({ title, items }) => (
  <Wrapper>
    <Container>
      <NavLink is={Link} to="/">
        {title}
      </NavLink>

      <Box is="nav" ml="auto" px={[2, 0]}>
        {items.map(x => (
          <MenuItem key={x.href} is={Link} to={x.href}>
            {x.label}
          </MenuItem>
        ))}
      </Box>
    </Container>
  </Wrapper>
);
