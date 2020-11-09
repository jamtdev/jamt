import React, { ElementType } from 'react';
import { text, TextKey } from 'src/config/theme';
import * as Style from './styled';

type TextProps = {
  testId?: string;
  htmlElement?: ElementType;
  variant?: TextKey;
  children: React.ReactNode | React.ReactNode[];
  textTransform?: React.CSSProperties['textTransform'];
  letterSpacing?: React.CSSProperties['letterSpacing'];
  style?: React.CSSProperties;
};

export type Props = TextProps & Partial<Style.TextStyleProps>;

const Text = ({
  testId,
  htmlElement,
  variant = 'body',
  children,
  ...props
}: Props) => {
  const { element, ...styles } = text[variant];

  return (
    <Style.Text
      data-testid={testId}
      as={htmlElement || element}
      {...styles}
      {...props}
    >
      {children}
    </Style.Text>
  );
};

export default Text;
