import styled from 'styled-components';
import { spacing } from 'src/config/theme';

export const Container = styled.div``;

export const Heading = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${spacing.BASE_2};
`;

export const SubHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${spacing.BASE_2};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${spacing.BASE_2};
`;
