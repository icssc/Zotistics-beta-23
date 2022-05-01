import "../styles/globals.css";

import type { AppProps } from "next/app";

import ColorSchemeContextProvider from "src/contexts/colorSchemeToggle/ColorSchemeContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorSchemeContextProvider initialValue="dark">
      <Component {...pageProps} />
    </ColorSchemeContextProvider>
  );
}

export default MyApp;
