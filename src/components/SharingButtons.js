import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  GooglePlusIcon,
  GooglePlusShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { Box, Flex } from 'rebass';

import { radii } from '../theme';

const ButtonWrapper = Box.extend.attrs({ m: 1 })`
  svg {
    border-radius: ${radii[1]}px;
  }

  svg:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const SharingButton = ({ Is, Icon, ...rest }) => (
  <ButtonWrapper is={Is} {...rest}>
    <Icon size={36} />
  </ButtonWrapper>
);

SharingButton.propTypes = {
  Is: PropTypes.func.isRequired,
  Icon: PropTypes.func.isRequired,
};

const SharingButtons = ({ title, url, tags, description }) => (
  <Flex mx={-1} mb={5}>
    <SharingButton Is={FacebookShareButton} Icon={FacebookIcon} url={url} />
    <SharingButton
      Is={TwitterShareButton}
      Icon={TwitterIcon}
      title={title}
      url={url}
      hashtags={tags}
    />
    <SharingButton
      Is={WhatsappShareButton}
      Icon={WhatsappIcon}
      title={title}
      url={url}
    />
    <SharingButton Is={GooglePlusShareButton} Icon={GooglePlusIcon} url={url} />
    <SharingButton
      Is={TumblrShareButton}
      Icon={TumblrIcon}
      title={title}
      url={url}
      tags={tags.map(x => startCase(x))}
      caption={description}
    />
    <SharingButton
      Is={EmailShareButton}
      Icon={EmailIcon}
      subject={title}
      url={url}
      body={`${description}\n\n${url}`}
    />
  </Flex>
);

SharingButtons.propTypes = {
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SharingButtons;
