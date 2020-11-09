import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { ThemeContext } from 'src/providers/ThemeProvider';
import { springProps, Label } from './styled';

const DarkModeSwitch = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleClick = () => changeTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT');

  const { r, transform, cx, cy, opacity } = springProps[
    theme === 'LIGHT' ? 'LIGHT' : 'DARK'
  ];

  const size = 24;

  const svg = useSpring({ transform, config: springProps.config });
  const circle = useSpring({ r, config: springProps.config });
  const mask = useSpring({ cx, cy, config: springProps.config });
  const lines = useSpring({ opacity, config: springProps.config });

  const label = `Activate ${theme === 'LIGHT' ? 'Dark' : 'Light'} Mode`;

  return (
    <Label
      data-testid="DarkModeSwitch"
      data-theme={theme}
      title={label}
      aria-label={label}
      onClick={handleClick}
    >
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="var(--text-body)"
        style={svg}
      >
        <mask id="Circle__Mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle
            r="9"
            fill="black"
            //@ts-ignore
            style={mask}
          />
        </mask>
        <animated.circle
          cx="12"
          cy="12"
          fill="var(--text-body)"
          mask="url(#Circle__Mask)"
          //@ts-ignore
          style={circle}
        />
        <animated.g stroke="var(--text-body)" style={lines}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </Label>
  );
};

export default DarkModeSwitch;
