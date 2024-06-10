import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider clientId={process.env.CLIENT1}, desiredChainId={ChainId.Polygon}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
