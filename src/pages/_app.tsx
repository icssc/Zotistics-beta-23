import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import ColorSchemeContextProvider from "src/contexts/colorSchemeToggle/ColorSchemeContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorSchemeContextProvider initialValue="dark">
      <Head>
        <title>Zotistics</title>
        <link rel="icon" href="/favicon.ico" />
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
