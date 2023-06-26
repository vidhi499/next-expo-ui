import Head from "next/head";
import { GluestackUIProvider } from "../components";
import { config } from "../gluestack-ui.config";

export default function App({ Component, pageProps }) {
  return (
    <GluestackUIProvider config={config.theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </GluestackUIProvider>
  );
}
