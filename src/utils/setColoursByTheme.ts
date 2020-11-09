import { Colours, ThemeKey } from 'src/config/theme';

const setColoursByTheme = () => {
  const embeddedColours = ('%%COLOURS%%' as unknown) as Colours;

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDark = mql.matches;

  const persistedThemeKey = localStorage.getItem('theme');
  const hasUsedToggle = typeof persistedThemeKey === 'string';

  let themeKey: ThemeKey = 'LIGHT';

  if (hasUsedToggle) {
    themeKey = persistedThemeKey as ThemeKey;
  } else {
    themeKey = prefersDark ? 'DARK' : 'LIGHT';
  }

  const root = document.documentElement;

  root.style.setProperty('--initial-theme', themeKey);

  Object.entries(embeddedColours).forEach(([name, colourByTheme]) => {
    const cssVarName = `--${name}`;

    root.style.setProperty(cssVarName, colourByTheme[themeKey]);
  });
};

export default setColoursByTheme;
