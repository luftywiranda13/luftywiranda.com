import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { BackgroundImage, Box, Card as C } from 'rebass';

import { radii } from '../theme';
import Anchor from './Anchor';
import Heading from './Heading';
import Text from './Text';

const Container = C.extend.attrs({ p: 0 })`
  min-height: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.2s ease-in-out;

    h3 {
      text-decoration: underline;
    }
  }
`;

const Thumbnail = BackgroundImage.extend.attrs({ ratio: 9 / 16 })`
  border-top-left-radius: ${radii[1]}px;
  border-top-right-radius: ${radii[1]}px;

  ${Container}:hover & {
    opacity: 0.8;
  }
`;

const Card = ({ title, category, description, thumbnail, link }) => (
  <Box is="article" p={2} width={[1, 1 / 3]}>
    <Anchor to={link} style={{ textDecoration: 'none' }}>
      <Container>
        {thumbnail && <Thumbnail is={Img} sizes={thumbnail} alt={title} />}

        <Box p={3}>
          <Text
            mb={0}
            fontSize={0}
            color="black54"
            style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}
          >
            {category}
          </Text>

          <Heading is="h3" fontSize={3} color="primary">
            {title}
          </Heading>

          <Text mb={0} color="black">
            {description}
          </Text>
        </Box>
      </Container>
    </Anchor>
  </Box>
);

Card.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    sizes: PropTypes.string,
  }),
};

Card.defaultProps = {
  thumbnail: null,
};

export default Card;
