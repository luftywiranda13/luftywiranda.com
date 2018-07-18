import React from 'react';
import { Heading } from 'rebass';

export default ({ children, ...rest }) => (
  <Heading mb={3} lineHeight="compact" {...rest}>
    {children}
  </Heading>
);
