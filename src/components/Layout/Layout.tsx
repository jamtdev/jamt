import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import * as Style from './styled';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: Props) => (
  <Style.Container>
    <Header />
    <Style.Content>{children}</Style.Content>
    <Footer />
  </Style.Container>
);

export default React.memo(Layout);
