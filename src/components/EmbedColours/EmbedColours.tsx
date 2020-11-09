import React from 'react';
import setColoursByTheme from 'src/utils/setColoursByTheme';
import { colours } from 'src/config/theme';

const EmbedColours = () => {
  const boundFn = String(setColoursByTheme).replace(
    "'%%COLOURS%%'",
    JSON.stringify(colours)
  );

  const calledFn = `(${boundFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: calledFn }} />;
};

export default EmbedColours;
