import React from 'react';
import PropTypes from 'prop-types';
import InternalLink from 'gatsby-link';
import styled from 'styled-components';

import { colors } from '../theme';

const Anchor = ({ children, to, ...rest }) =>
  to.includes('https://') ? (
    <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  ) : (
    <InternalLink to={to} {...rest}>
      {children}
    </InternalLink>
  );

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export const StyledAnchor = styled(Anchor)`
  color: ${colors.primary};
  text-decoration: none;
  border-bottom: 1px dotted ${colors.primary};

  &:hover {
    border-bottom: 1px solid ${colors.primary};
  }
`;

export default Anchor;
