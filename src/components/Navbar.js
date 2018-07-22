import React from 'react';
import { Box, NavLink as N } from 'rebass';
import styled from 'styled-components';
import { colors, lineHeights } from '../theme';
import Anchor from './Anchor';
import C from './Container';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  border-top: 5px solid ${colors.primary};
  border-bottom: 1px solid ${colors.darken};

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = C.extend`
  display: flex;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
`;

const NavLink = N.extend.attrs({ p: 3, fontSize: 2 })`
  line-height: ${lineHeights.loose};
`;

const MenuItem = NavLink.extend.attrs({
  px: [2, 3],
  color: 'black54',
  fontWeight: 'normal',
})`
  &:hover {
    color: ${colors.primary};
    box-shadow: inset 0 -2px ${colors.primary};
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export default ({ title, items }) => (
  <Wrapper>
    <Container>
      <NavLink is={Anchor} to="/">
        {title}
      </NavLink>

      <Box is="nav" ml="auto" px={[2, 0]}>
        {items.map(x => (
          <MenuItem key={x.href} is={Anchor} to={x.href}>
            {x.label}
          </MenuItem>
        ))}
      </Box>
    </Container>
  </Wrapper>
);
