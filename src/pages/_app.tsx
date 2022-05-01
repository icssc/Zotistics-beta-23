import "../styles/globals.css";

import type { AppProps } from "next/app";

import Layout from "src/layouts/Layout";

import ColorSchemeContextProvider from "src/contexts/colorSchemeToggle/ColorSchemeContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorSchemeContextProvider initialValue="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ColorSchemeContextProvider>
  );
}

export default MyApp;
