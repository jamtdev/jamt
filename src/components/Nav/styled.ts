import styled from 'styled-components';
import { mediaQueries, spacing } from 'src/config/theme';

type LinkContainerProps = {
  isLast: boolean;
};

export const Container = styled.div`
  display: flex;
`;

export const LinkContainer = styled.div<LinkContainerProps>`
  margin-right: ${({ isLast }) => (isLast ? '' : spacing.BASE_2)};

  ${mediaQueries.mobile`
    margin-right: ${({ isLast }: LinkContainerProps) =>
      isLast ? '' : spacing.BASE_4};
  `}
`;
