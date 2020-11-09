import styled from 'styled-components';
import { spacing } from 'src/config/theme';
import { footerHeight } from 'src/components/Layout/styled';

export const Container = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: ${footerHeight};
  padding: ${spacing.BASE_3};
  padding-top: ${spacing.BASE_5};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 50px;
  margin-right: ${spacing.BASE_2};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;
