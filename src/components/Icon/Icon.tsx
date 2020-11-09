import React from 'react';
import { IconBaseProps } from 'react-icons';
import { icons, IconKey, ColourKey } from 'src/config/theme';

interface Props extends IconBaseProps {
  testId?: string;
  icon: IconKey;
  colour?: ColourKey;
  style?: React.CSSProperties;
}

const Icon = ({
  testId,
  icon,
  colour = 'text-body',
  size = 24,
  ...props
}: Props) => {
  const Component = icons[icon];

  return (
    <Component
      data-testid={testId}
      color={`var(--${colour})`}
      size={size}
      {...props}
    />
  );
};

export default Icon;
