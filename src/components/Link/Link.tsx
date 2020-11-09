import React from 'react';
import NextLink from 'next/link';
import * as Style from './styled';

interface Props {
  testId?: string;
  href: string;
  newTab?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const Link = ({ testId, href, newTab, children }: Props) => (
  <NextLink href={href} passHref>
    <Style.Link data-testid={testId} target={newTab ? '_blank' : undefined}>
      {children}
    </Style.Link>
  </NextLink>
);

export default Link;
