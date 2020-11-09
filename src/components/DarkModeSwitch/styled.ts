import { spacing } from 'src/config/theme';
import styled from 'styled-components';

export const springProps = {
  LIGHT: {
    r: 9,
    transform: 'rotate(40deg)',
    cx: 12,
    cy: 4,
    opacity: 0,
  },
  DARK: {
    r: 5,
    transform: 'rotate(90deg)',
    cx: 30,
    cy: 0,
    opacity: 1,
  },
  config: { mass: 4, tension: 250, friction: 35 },
};

export const Label = styled.label`
  cursor: pointer;

  display: flex;
  align-items: center;
  opacity: 0.75;
  margin-left: ${spacing.BASE_2};

  &:hover {
    opacity: 1;
  }
`;
