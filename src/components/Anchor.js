import GatsbyLink from 'gatsby-link';
import React from 'react';
import { Link as RebassLink } from 'rebass';
import { colors } from '../theme';

const Link = RebassLink.extend`
  ${p =>
    p.primary === 'true' &&
    `
    text-decoration: none;
    border-bottom: 1px dotted ${colors.primary};

    &:hover {
      text-decoration: none;
      color: ${colors.primary};
      border-bottom: 1px solid ${colors.primary};
    }
  `};
`;

export default ({ to, ...rest }) =>
  to.includes('https://') ? (
    <Link
      href={to}
      target="_blank"
      color="primary"
      rel="noopener noreferrer"
      {...rest}
    />
  ) : (
    <Link is={GatsbyLink} to={to} color="primary" {...rest} />
  );
