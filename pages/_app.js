import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';

import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/FiraCode-VariableFont_wght.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
