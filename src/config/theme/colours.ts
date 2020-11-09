import { Colours } from './types';

const WHITE = '#FFFFFF';

// Names courtesy of: `https://coolors.co`.
const RICH_BLACK_FOGRA_39 = '#0A0C10';
const RICH_BLACK_FOGRA_29 = '#0E141B';
const RAISIN_BLACK = '#21232C';
const RHYTHM = '#6C7693';
const LIGHT_SLATE_GRAY = '#7E8C9A';
const CULTURED = '#F2F5F7';

const RAZZMATAZZ = '#E60067';
const WINTER_SKY = '#FF0A78';
const HAN_PURPLE = '#4433FF';
const ULTRAMARINE_BLUE = '#4A67F7';

export const colours: Colours = {
  bg: {
    LIGHT: WHITE,
    DARK: RICH_BLACK_FOGRA_29,
  },
  border: {
    LIGHT: CULTURED,
    DARK: RAISIN_BLACK,
  },
  primary: {
    LIGHT: HAN_PURPLE,
    DARK: WINTER_SKY,
  },
  secondary: {
    LIGHT: RAZZMATAZZ,
    DARK: ULTRAMARINE_BLUE,
  },
  'switch-bg': {
    LIGHT: RICH_BLACK_FOGRA_29,
    DARK: WHITE,
  },
  'switch-dot': {
    LIGHT: WHITE,
    DARK: RICH_BLACK_FOGRA_29,
  },
  'text-heading': {
    LIGHT: RAISIN_BLACK,
    DARK: CULTURED,
  },
  'text-sub-heading': {
    LIGHT: RHYTHM,
    DARK: LIGHT_SLATE_GRAY,
  },
  'text-body': {
    LIGHT: RICH_BLACK_FOGRA_39,
    DARK: WHITE,
  },
};
