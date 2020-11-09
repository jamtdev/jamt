import React from 'react';
import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { IconKey } from 'src/config/theme';
import * as Style from './styled';

type Props = {
  icon?: IconKey;
  heading: string;
  subHeading: string;
  children: React.ReactNode | React.ReactNode[];
};

const GridItem = ({ icon, heading, subHeading, children }: Props) => (
  <Style.Container>
    <Style.Heading>
      {icon && (
        <Style.Icon>
          <Icon icon={icon} />
        </Style.Icon>
      )}
      <Text variant="h3">{heading}</Text>
    </Style.Heading>
    <Style.SubHeading>
      <Text variant="h4" size="16px" colour="text-sub-heading" weight={500}>
        {subHeading}
      </Text>
    </Style.SubHeading>
    {children}
  </Style.Container>
);

export default GridItem;
