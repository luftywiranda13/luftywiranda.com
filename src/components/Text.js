import React from 'react';
import PropTypes from 'prop-types';
import { Text as T } from 'rebass';

const Text = ({ children, ...rest }) => (
  <T is="p" lineHeight="loose" mb={3} {...rest}>
    {children}
  </T>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
