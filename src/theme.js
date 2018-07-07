import { colors as baseColor } from 'rebass';

export const breakpoints = [32, 48, 64, 80].map(x => `${x}em`);

export const colors = Object.assign({}, baseColor, {
  black87: 'rgba(0, 0, 0, 0.87)',
  black54: 'rgba(0, 0, 0, 0.54)',
  black38: 'rgba(0, 0, 0, 0.38)',
  black12: 'rgba(0, 0, 0, 0.12)',
});

export const fonts = {
  sans:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
};

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];

export const fontWeights = {
  normal: 400,
  bold: 700,
};

export const lineHeights = {
  compact: 1.125,
  loose: 1.5,
};

export const radii = [0, 2, 4];

export const space = [0, 4, 8, 16, 32, 64, 128];

export default {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
};
