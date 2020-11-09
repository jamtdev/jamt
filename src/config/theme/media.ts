import { css } from 'styled-components';
import { BreakpointKey, Breakpoints, MediaQuery } from './types';

export const breakpoints: Breakpoints = {
  mobile: 425,
  desktop: 600,
};

export const mediaQueries = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key as BreakpointKey] = (...args) => css`
    @media (min-width: ${breakpoints[key as BreakpointKey]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {} as Record<BreakpointKey, MediaQuery>);
