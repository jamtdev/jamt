import styled from 'styled-components';

export const Link = styled.a`
  cursor: pointer;

  color: var(--text-body);
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: var(--primary);
  white-space: nowrap;

  &:hover {
    color: var(--primary);
  }
`;
