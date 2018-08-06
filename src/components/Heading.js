import React from 'react';
import PropTypes from 'prop-types';
import { Heading as H } from 'rebass';

const Heading = ({ children, ...rest }) => (
  <H mb={3} lineHeight="compact" {...rest}>
    {children}
  </H>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
