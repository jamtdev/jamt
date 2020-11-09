import React from 'react';
import DarkModeSwitch from 'src/components/DarkModeSwitch';
import Nav from 'src/components/Nav';
import * as Style from './styled';

const Header = () => (
  <Style.Container>
    <Nav />
    <DarkModeSwitch />
  </Style.Container>
);

export default React.memo(Header);
