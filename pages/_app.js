import "../styles/globals.css";
import { Providers } from "../redux/provider";
//import { Inter } from "next/font/google";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
