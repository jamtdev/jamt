import styled from 'styled-components';
import { spacing, mediaQueries } from 'src/config/theme';
import { headerHeight } from 'src/components/Layout/styled';

export const Container = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: ${headerHeight};
  padding: ${spacing.BASE_3};
  border-bottom: 1px solid var(--border);
  background-color: var(--bg);

  ${mediaQueries.desktop`
    position: relative;
    border-bottom: none;
  `}
`;
