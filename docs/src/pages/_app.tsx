import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import '@parley-hub/aeolus/lib/main.css';
import '../scss/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};
export default MyApp;
