import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(en);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
