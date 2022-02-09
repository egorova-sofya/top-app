import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
  <Head>
    <title>MyTop - наш лучший топ</title>
    <link key={1} rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
  </Head>
  <Component {...pageProps} />
  </>;
}

export default MyApp;
