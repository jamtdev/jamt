import React, { useState } from 'react';
import { useSpring, config } from 'react-spring';
import Link from 'next/link';
import Icon from 'src/components/Icon';
import * as Style from './styled';

interface Props {
  testId: string;
  children: React.ReactNode | React.ReactNode[];
  href: string;
}

const LinkButton = ({ testId, children, href }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const initialSpringValues = { opacity: 0.75, transform: 'translateX(-10px)' };

  const handleMouseEnter = () => {
    set({ opacity: 1, transform: 'translateX(-5px)' });
    setHovered(true);
  };

  const handleMouseLeave = () => {
    set({ ...initialSpringValues });
    setHovered(false);
  };

  const [spring, set] = useSpring(() => ({
    ...initialSpringValues,
    config: config.wobbly,
  }));

  return (
    <Link href={href} passHref>
      <Style.LinkButton
        data-testid={testId}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <Style.IconContainer data-testid={`${testId}__Icon`} style={spring}>
          <Icon icon="arrowRight" colour={'primary'} />
        </Style.IconContainer>
      </Style.LinkButton>
    </Link>
  );
};

export default LinkButton;
