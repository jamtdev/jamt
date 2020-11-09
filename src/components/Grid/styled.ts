import styled from 'styled-components';
import { spacing, mediaQueries } from 'src/config/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: ${spacing.BASE_4};

  ${mediaQueries.desktop`
    grid-template-columns: 2fr 2fr;
    grid-auto-rows: 1fr;
  `}
`;
