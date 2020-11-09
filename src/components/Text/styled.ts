import styled from 'styled-components';
import { TextVariant } from 'src/config/theme';

export type TextStyleProps = Omit<TextVariant, 'element'>;

export const Text = styled.p<TextStyleProps>`
  color: ${({ colour }) => (colour !== undefined ? `var(--${colour})` : '')};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  white-space: pre-wrap;
`;
