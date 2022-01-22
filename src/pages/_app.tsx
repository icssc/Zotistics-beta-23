import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import ColorSchemeContextProvider from "src/contexts/colorSchemeToggle/ColorSchemeContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorSchemeContextProvider initialValue="dark">
      <Head>
        <title>Zotistics</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=2"
          color="#0064a4"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta name="msapplication-TileColor" content="#0064a4" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ColorSchemeContextProvider>
  );
}

export default MyApp;
