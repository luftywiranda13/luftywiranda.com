import React from 'react';
import { Text } from 'rebass';

export default ({ children, ...rest }) => (
  <Text is="p" lineHeight="loose" mb={3} {...rest}>
    {children}
  </Text>
);
