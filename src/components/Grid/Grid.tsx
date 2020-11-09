import React from 'react';
import * as Style from './styled';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Grid = ({ children }: Props) => (
  <Style.Container>{children}</Style.Container>
);

export default Grid;
