import React from 'react';
import Text from 'src/components/Text';
import * as Style from './styled';

const Footer = () => (
  <Style.Container>
    <Style.Profile>
      <Style.ImageWrapper>
        <Style.Image
          src={require('public/images/me.jpg')}
          alt="James Taylor, Hong Kong, 2019"
        />
      </Style.ImageWrapper>
      <Style.Copyright>
        <Text colour="text-body" size="12px">
          Made with{' '}
          <span role="img" aria-label="Coffee Emoji">
            ☕
          </span>{' '}
          in London.
        </Text>
        <Text colour="text-body" size="12px">
          © 2020 James Taylor. All rights reserved.
        </Text>
      </Style.Copyright>
    </Style.Profile>
  </Style.Container>
);

export default Footer;
