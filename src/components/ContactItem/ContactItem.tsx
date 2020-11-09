import React from 'react';
import Text from 'src/components/Text';
import Icon from 'src/components/Icon';
import { IconKey, spacing } from 'src/config/theme';
import * as Style from './styled';

interface Props {
  icon: IconKey;
  children: React.ReactNode | React.ReactNode[];
}

const ContactItem = ({ icon, children }: Props) => (
  <Style.Container>
    <Style.IconContainer>
      <Icon icon={icon} />
    </Style.IconContainer>
    {children}
  </Style.Container>
);

export default ContactItem;
