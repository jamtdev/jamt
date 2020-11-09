import React from 'react';
import { AppProps } from 'next/app';
import ThemeProvider from 'src/providers/ThemeProvider';
import GlobalStyle from 'src/components/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
