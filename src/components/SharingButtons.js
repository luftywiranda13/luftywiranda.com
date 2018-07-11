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
import { Box as B, Flex } from 'rebass';

const Box = B.extend.attrs({ m: 1 })``;

export default ({ title, url, tags, description }) => (
  <Flex m={-1}>
    <Box is={FacebookShareButton} url={url}>
      <FacebookIcon size={32} />
    </Box>
    <Box is={TwitterShareButton} title={title} url={url} hashtags={tags}>
      <TwitterIcon size={32} />
    </Box>
    <Box is={WhatsappShareButton} title={title} url={url}>
      <WhatsappIcon size={32} />
    </Box>
    <Box is={GooglePlusShareButton} url={url}>
      <GooglePlusIcon size={32} />
    </Box>
    <Box
      is={TumblrShareButton}
      title={title}
      url={url}
      tags={tags.map(x => startCase(x))}
      caption={description}
    >
      <TumblrIcon size={32} />
    </Box>
    <Box
      is={EmailShareButton}
      subject={title}
      url={url}
      body={`${description}\n\n${url}`}
    >
      <EmailIcon size={32} />
    </Box>
  </Flex>
);
