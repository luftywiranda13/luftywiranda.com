/* eslint-disable no-multi-assign */

'use strict';

const { colors: baseColor } = require('rebass');

const navbarHeight = (exports.navbarHeight = 56);

const breakpoints = (exports.breakpoints = [32, 48, 64, 80].map(x => `${x}em`));

const colors = (exports.colors = Object.assign({}, baseColor, {
  primary: '#000',

  black54: 'rgba(0, 0, 0, 0.54)',
  black38: 'rgba(0, 0, 0, 0.38)',
  black12: 'rgba(0, 0, 0, 0.12)',
}));

const fonts = (exports.fonts = {
  sans:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
});

const fontSizes = (exports.fontSizes = [12, 14, 16, 20, 24, 32]);

const fontWeights = (exports.fontWeights = {
  normal: 400,
  bold: 700,
});

const lineHeights = (exports.lineHeights = {
  compact: 1.125,
  loose: 1.5,
});

const radii = (exports.radii = [0, 1, 1]);

const space = (exports.space = [0, 4, 8, 16, 24, 32, 64]);

module.exports = {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  navbarHeight,
  radii,
  space,
};
