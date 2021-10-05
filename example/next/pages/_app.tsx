import type { AppProps } from 'next/app'
import '@parley-hub/aeolus/lib/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
