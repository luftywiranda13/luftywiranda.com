import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'rebass';
import styled from 'styled-components';

import { breakpoints, colors, navbarHeight, space } from '../theme';
import Anchor from './Anchor';
import C from './Container';

const borders = {
  top: 5,
  bottom: 1,
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: ${navbarHeight}px;
  background-color: rgba(255, 255, 255, 0.98);
  border-top: ${borders.top}px solid ${colors.primary};
  border-bottom: ${borders.bottom}px solid ${colors.darken};
`;

const Container = C.withComponent('div').extend`
  display: flex;
  height: 100%;
  margin-bottom: 0;
  padding-left: ${space[2]}px;
  padding-right: ${space[2]}px;
`;

const Nav = styled.nav`
  display: flex;
  margin-left: auto;

  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints[0]}) {
    mask-image: linear-gradient(
      to right,
      transparent,
      black ${space[3]}px,
      black 90%,
      transparent
    );
  }
`;

const NavItem = NavLink.extend.attrs({
  color: 'black54',
  fontSize: 2,
  fontWeight: 'normal',
  activeClassName: 'navitem-active',
})`
  &:hover,
  &.navitem-active {
    color: ${colors.primary};
  }
`;

const Navbar = ({ title, items }) => (
  <Wrapper>
    <Container>
      <NavLink is={Anchor} to="/" fontSize={2}>
        {title}
      </NavLink>

      <Nav>
        {items.map(x => (
          <NavItem key={x.href} is={Anchor} to={x.href}>
            {x.label}
          </NavItem>
        ))}
      </Nav>
    </Container>
  </Wrapper>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
