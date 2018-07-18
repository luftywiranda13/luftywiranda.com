import React from 'react';
import { Lead } from 'rebass';

export default ({ children, ...rest }) => (
  <Lead is="p" mb={3} {...rest}>
    {children}
  </Lead>
);
