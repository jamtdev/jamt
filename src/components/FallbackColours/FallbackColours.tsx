import React from 'react';
import { colours } from 'src/config/theme';

const FallbackColours = () => {
  const cssVariables = Object.entries(colours).reduce(
    (acc, [name, colourByTheme]) => {
      return `${acc}\n--${name}: ${colourByTheme.LIGHT};`;
    },
    ''
  );

  const wrappedCss = `html { ${cssVariables} }`;

  return <style>{wrappedCss}</style>;
};

export default FallbackColours;
