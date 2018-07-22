import { startCase } from 'lodash';
import React from 'react';
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

export default ({ title, url, tags, description }) => (
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
