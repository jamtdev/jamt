import React from 'react';
import Link from 'src/components/Link';
import routes from 'src/config/routes';
import * as Style from './styled';

const Nav = () => (
  <Style.Container>
    {routes.map((route, i) => (
      <Style.LinkContainer key={route.path} isLast={i === routes.length - 1}>
        <Link testId={`NavLink__${route.text}`} href={route.path}>
          {route.text}
        </Link>
      </Style.LinkContainer>
    ))}
  </Style.Container>
);

export default Nav;
