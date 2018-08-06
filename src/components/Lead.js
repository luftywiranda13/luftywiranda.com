import React from 'react';
import PropTypes from 'prop-types';
import { Lead as L } from 'rebass';

const Lead = ({ children, ...rest }) => (
  <L is="p" mb={3} {...rest}>
    {children}
  </L>
);

Lead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Lead;
