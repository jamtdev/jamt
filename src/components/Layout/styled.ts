import styled from 'styled-components';
import { spacing, mediaQueries } from 'src/config/theme';

export const headerHeight = '100px';
export const footerHeight = '150px';

export const Container = styled.div`
  position: relative;

  width: 100%;
  max-width: 960px;
  min-height: ${`calc(100vh - ${headerHeight})`};
  margin: 0 auto;

  ${mediaQueries.desktop`
    min-height: 100vh;
  `}
`;

export const Content = styled.div`
  padding: ${spacing.BASE_5} ${spacing.BASE_3};
  padding-bottom: ${footerHeight};
  margin-top: ${headerHeight};

  ${mediaQueries.desktop`
    margin-top: 0;
  `}
`;
