import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter-Static-Regular';
    src: url('/fonts/Inter-Static-Regular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter-Variable';
    src: url('/fonts/Inter-Variable.woff2') format('woff2');
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  html, body {
    background: var(--bg);

    font-family: 'Inter-Static-Regular', sans-serif;

    @supports (font-variation-settings: normal) {
      html, body { font-family: 'Inter-Variable', sans-serif; }
    }
  }
`;

export default GlobalStyle;
