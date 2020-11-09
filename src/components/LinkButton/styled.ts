import styled from 'styled-components';
import { animated } from 'react-spring';
import { spacing } from 'src/config/theme';

export const LinkButton = styled.a`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  color: var(--text-body);

  &:hover {
    color: var(--primary);
  }
`;

export const IconContainer = styled(animated.div)`
  display: inline-flex;
  align-items: center;
  margin-left: ${spacing.BASE_2};
`;
